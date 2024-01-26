const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name:{type:String},
        beds:[{type: mongoose.Types.ObjectId, ref:"beds"}],
        capacity:{type: Number },
        description:{type: String },
        images:[{type:String}],
        price:{type: Number}
    },
    
    {
        timestamps:true,
        collection: "room"
    }
)

const Room = mongoose.model("room", roomSchema);

module.exports = Room;