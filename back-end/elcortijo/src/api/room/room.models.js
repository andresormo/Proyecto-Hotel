const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        beds:[{type: mongoose.Types.ObjectId, ref:"beds"}],
        capacity:{type: Number },
        description:{type: String },
        images:{type:[String]}
    },
    
    {
        timestamps:true,
        collection: "room"
    }
)

const Room = mongoose.model("room", roomSchema);

module.exports = Room;