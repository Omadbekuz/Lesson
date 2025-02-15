const rt = require("express").Router();

const uc = require("./controller/user.controller");
const uv = require("./validation/user.validation"); 

rt.get("/api/users", uc.getUsers);
rt.post("/api/users", uv.createUser, uc.createUser);
rt.get("/api/users/:id", uc.getUserById);
rt.put("/api/users/:id", uc.updateUser);
rt.delete("/api/users/:id", uc.deleteUser);

module.exports = rt;    
