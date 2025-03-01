const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

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

      const file = path.join(__dirname, "./data.json");
      const users = JSON.parse(fs.readFileSync(file, "utf8"));
      users.push(req.body);
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
