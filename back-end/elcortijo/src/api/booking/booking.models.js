const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema(
    {
        user:[{type:mongoose.Types.ObjectId,required:true , ref:"users"}],
        dateIn:{type:Date, required:true},
        dateOut:{type:Date, required:true},
        room:[{type:mongoose.Types.ObjectId, required:true, ref:"room"}],
        persons:{type:Number, required:true}
    },
    {
        timestamps:true,
        collection: "booking"
    }
)

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;