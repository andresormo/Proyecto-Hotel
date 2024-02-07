const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const  { getAllRoom, getRoomById, createRoom, updateRoom, deleteRoom } = require("./room.controller");

const routerRooms = require("express").Router();

routerRooms.get("/", getAllRoom);
routerRooms.get("/room/:id", getRoomById);
routerRooms.post("/", upload.array("images",10),[isAdmin], createRoom);
routerRooms.put("/:id",upload.array("images"),[isAdmin], updateRoom);
routerRooms.delete("/delete/:id",[isAdmin], deleteRoom);

module.exports = routerRooms;