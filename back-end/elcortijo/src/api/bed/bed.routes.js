const { isAdmin } = require("../../middlewares/auth");
const { getAllBed,  getBedById, createBed, deleteBed} = require("./bed.controller");

const routerBed = require("express").Router();

routerBed.get("/", getAllBed);
routerBed.get("/bed/:id", getBedById);
routerBed.post("/",[isAdmin], createBed);
routerBed.delete("/:id",[isAdmin], deleteBed);

module.exports = routerBed;