const { isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getAllUser, getUserById, registerUser, login, updateUser } = require("./user.controller");

const routerUsers = require("express").Router();

routerUsers.get("/",[isAdmin], getAllUser);
routerUsers.get("/user/:id", getUserById);
routerUsers.post("/", upload.single("image"), registerUser);
routerUsers.post("/login", login);
routerUsers.put("/modify/:id",[isAuth], updateUser);

module.exports = routerUsers;