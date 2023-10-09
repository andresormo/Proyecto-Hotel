const { isAuth } = require("../../middlewares/auth.js");
const { getAllBooking, getBookingById, createBooking, updateBooking, deleteBooking } = require("./booking.controller.js");

const routerBooking = require("express").Router();

routerBooking.get("/",[isAuth], getAllBooking);
routerBooking.get("/booking/:id", getBookingById);
routerBooking.post("/", createBooking);
routerBooking.put("/update/:id",[isAuth], updateBooking);
routerBooking.delete("/delete/:id", [isAuth], deleteBooking)

module.exports = routerBooking;