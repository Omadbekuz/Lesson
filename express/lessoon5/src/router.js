const rt = require("express").Router();

const uc = require("./controller/user.controller");
const uv = require("./validation/user.validation");

// UUID ni tekshiradigan middleware ni kerakli joylarga qo'shamiz
rt.get("/users", uc.getUsers);
rt.post("/users", uv.createUser, uc.createUser);
rt.get("/users/:id", uv.checkUuid, uc.getUserById);
rt.put("/users/:id", uv.checkUuid, uv.createUser, uc.updateUser);
rt.delete("/users/:id", uv.checkUuid, uc.deleteUser);

module.exports = rt;
