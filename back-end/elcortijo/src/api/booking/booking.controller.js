const { verifyToken } = require("../../utils/jsonwebtoken.js");
const User = require("../users/user.models.js");
const Booking = require("./booking.models.js");

const getAllBooking = async ( req, res, next)=>{
try {
    const token = req.headers.authorization;
    const parsedToken = token.replace("Bearer ", "");

    const user = verifyToken(parsedToken);
    if(user){
        
        const booking = await Booking.find().populate({path:"room", select:"description"}).populate({path:"user", select:"name"});

        const userLoged = await User.findById(user.id);
        const idUser = userLoged._id.toString();
        
        if(userLoged.rol === 'admin'){
            return res.json(booking)
        } else{
            const userBooking = booking.filter(x=>x.user[0]._id.toString() === idUser);
            return res.json(userBooking)
        }
}
} catch (error) {
    return res.json(error)
}
    
}

const getBookingById = async (req, res, next)=>{
    try {
        const {id}= req.params;
        const booking = await Booking.findById(id);
        if(!booking){
            return res.json("No existe reserva con ese ID")
        } 
        return res.status(200).json(booking);
    } catch (error) {
        return next(error);
    }
}


const createBooking = async (req, res, next)=>{
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        const bookingPopulated = await Booking.find({_id: newBooking._id}).populate("room")
        console.log(bookingPopulated);
        return res.status(200).json(bookingPopulated); 
    } catch (error) {
        return next(error);
    }
}

const updateBooking = async (req,res, next)=>{
    try {
        const {id} = req.params;
       const newBooking = await Booking.findByIdAndUpdate(id, req.body,{new:true});
       return res.status(200).json(newBooking);
    } catch (error) {
        return next(error);
    }
}



module.exports = { getAllBooking, getBookingById, createBooking, updateBooking }