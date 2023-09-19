const express = require('express');
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();
app.use((cors({
    origin:"*"
})));

const routerBed = require("./src/api/bed/bed.routes");
const routerRooms = require('./src/api/room/room.routes');
const routerBooking = require('./src/api/booking/booking.routes');
const routerUsers = require('./src/api/users/user.routes');

const cloudinary = require("cloudinary").v2;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/beds", routerBed);
app.use("/rooms", routerRooms);
app.use("/booking", routerBooking);
app.use("/users", routerUsers);

const db = require("./src/utils/db.js");
db.connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use((err, req, res, next)=>{
    return res.status(err.status || 500).json(err.message||"Error inesperado")
});

app.use("*", (req, res, next)=>{
    return res.status(404).json("Route not found")
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});