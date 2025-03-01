const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const sharp = require("sharp");

class userService {
  async getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const file = path.join(__dirname, "./data.json");
        const users = JSON.parse(fs.readFileSync(file, "utf8"));

        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }
  //add user by name , age
  async createUser(req, res) {
    return new Promise(async (resolve, reject) => {
      req.body.id = uuidv4();

      const imgInfo = req.file || null;

      const imagesPath = path.join(__dirname, "../../public", "images");
      if (!fs.existsSync(imagesPath)) fs.kmdirSync(imagesPath);

      const imgFormat = imgInfo.mimetype.split("/").pop();
      const imgName = `${crypto.randomBytes(7).toString("hex")}.${imgFormat}`;

      sharp(imgInfo.buffer).resize(360).toFile(`${imagesPath}/${imgName}`);
      console.log(imgName);

      const file = path.join(__dirname, "./data.json");
      const users = JSON.parse(fs.readFileSync(file, "utf8"));
      users.push({ ...req.body, img: imgName });
      fs.writeFileSync(file, JSON.stringify(users, null, 2));
      resolve({ message: "User created successfully" });
    });
  }

  async getUserById(id) {
    const file = path.join(__dirname, "./data.json");
    try {
      const users = JSON.parse(fs.readFileSync(file, "utf8"));
      return users.find((user) => user.id === id) || null;
    } catch (error) {
      throw new Error("Error fetching user");
    }
  }

  async updateUser(id, name, age) {
    const file = path.join(__dirname, "./data.json");
    try {
      let users = JSON.parse(fs.readFileSync(file, "utf8"));
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) return null;

      users[index] = { id, name, age };
      fs.writeFileSync(file, JSON.stringify(users, null, 2));

      return users[index];
    } catch (error) {
      throw new Error("Error updating user");
    }
  }
  async deleteUser(id) {
    const file = path.join(__dirname, "./data.json");
    try {
      let users = JSON.parse(fs.readFileSync(file, "utf8"));
      const filteredUsers = users.filter((user) => user.id !== id);
      if (filteredUsers.length === users.length) return false;

      fs.writeFileSync(file, JSON.stringify(filteredUsers, null, 2));
      return true;
    } catch (error) {
      throw new Error("Error deleting user");
    }
  }
}
module.exports = new userService();
