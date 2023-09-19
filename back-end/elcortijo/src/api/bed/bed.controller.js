 const Bed = require("./bed.models");

 const getAllBed = async (req, res, next)=>{
    try {
        const bed = await Bed.find();
        return res.json(bed);
    } catch (error) {
        return next(error)
    }
 }


 const getBedById = async (req, res, next)=>{
    
    try {
        const {id} = req.params;
        const bed = await Bed.findById(id);
        if(!bed){
            return res.json("No existe cama con ese ID");
        }
        return res.status(200).json(bed);
    } catch (error) {
        return next(error)
    }
 }

 const createBed = async (req, res, next)=>{
    try {
        const newBed = new Bed(req.body);
        await newBed.save();
        return res.status(200).json(newBed);
    } catch (error) {
        return next(error)
    }
 }

 const deleteBed = async (req, res, next)=>{
    try {
        const{id} = req.params;
        const bedDeleted = await Bed.findByIdAndDelete(id);
        return res.status(200).json(bedDeleted)
    } catch (error) {
        return next(error);
    }
 }

 module.exports = { getAllBed,  getBedById, createBed, deleteBed}