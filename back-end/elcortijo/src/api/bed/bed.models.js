const mongoose = require("mongoose");

const bedSchema= new mongoose.Schema(
    {
        type:{type:String, required:true, unique: true}
    },
    {
        timestamps: true,
        collection: "beds"
    }
)

const Bed = mongoose.model("beds", bedSchema);

module.exports = Bed;