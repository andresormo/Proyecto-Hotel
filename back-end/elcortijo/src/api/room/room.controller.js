const Room = require("./room.models");

const getAllRoom = async (req,res,next)=>{
    try {
        const room = await Room.find().populate("beds");
        return res.json(room);
    } catch (error) {
        return next(error)
    }
}

const getRoomById = async (req, res, next)=>{
    try {
        const{id}= req.params;
        const room = await Room.findById(id).populate("beds");
        if(!room){
            return res.json("No existe habiatción con ese ID")
        }
        return res.json(room);
    } catch (error) {
        return next(error);
    }
}

const createRoom = async ( req,res, next)=>{
    try {
        const newRoom = new Room(req.body);
        if(req.file){
            newRoom.images = req.file.path;
        }
        await newRoom.save();
        return res.json(newRoom);

    } catch (error) {
        return next(error);
    }
}

const updateRoom = async (req, res, next)=>{
    try {
        const {id} = req.params;
        if(req.file){
            req.body.images = req.file.path;
        }
        const roomUpdate = await Room.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).json(roomUpdate)
    } catch (error) {
        return next(error);
    }
}

const deleteRoom = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const deletedRoom = await Room.findByIdAndDelete(id);
        return res.status(200).json(deletedRoom);
    } catch (error) {
        return next(error);
    }

}


module.exports = { getAllRoom, getRoomById, createRoom, updateRoom, deleteRoom }