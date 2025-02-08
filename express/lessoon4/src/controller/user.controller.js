const userService = require("../service/user.service");

class userController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers(req, res);

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, age } = req.body; // Faqat kerakli malumotni ajratib olish
      const user = await userService.createUser(name, age); // Servicega kerakli malumotlarni yuborish
      res.status(201).json({ massage: "User created" }); // 201 status kodini qaytarish
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(Number(id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;
      const updatedUser = await userService.updateUser(Number(id), name, age);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await userService.deleteUser(Number(id));
      if (!isDeleted) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new userController();
