const { verifyToken, generateSign } = require("../../utils/jsonwebtoken");
const User = require("./user.models");
const bcrypt = require("bcrypt");

const getAllUser = async(req,res,next)=>{
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return next(error);
    }
}

const getUserById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.json("No existe usuario con ese ID");
        }
        return res.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}

const registerUser = async(req,res, next)=>{
    try {
        if(req.body.rol === "admin"){
            req.body.rol = "user"
        }
        const newUser = new User(req.body);
        if(req.file){
            newUser.image = req.file.path;
        }
        await newUser.save();
        console.log(newUser);
        return res.json(newUser);
    } catch (error) {
        return next(error);
    }
}

const login = async(req, res, next)=>{
    try {
        const userToLog = await User.findOne({email: req.body.email})
        if(!userToLog){
            return res.status(500).json("No existe el usuario")
        }
        if(bcrypt.compareSync(req.body.password, userToLog.password)){
            const token = generateSign(userToLog._id, userToLog.email) ;
            return res.status(200).json({token, userToLog});
        } else{
            return res.status(500).json("Credenciales no válidas")
        }
        
    } catch (error) {
        return next(error);
    }
}

const updateUser = async ( req, res, next)=>{
    try {
        const {id} = req.params;
        const userToUpdate = new User(req.body);

        if(req.user.rol !== "admin"){
            userToUpdate.rol = "user";
        }

        userToUpdate._id = id;

        const idUser = JSON.stringify(req.user.id);
        const idUserParsed = idUser.slice(1, idUser.length - 1);


        if(idUserParsed === id || req.user.rol === "admin"){
            const userToUpdate = await User.findByIdAndUpdate(id, req.body, {new:true});
            return res.json(userToUpdate);
        } else {    
            return res.json("No puedes modificar otro usuario sin ser administrador");
        }

    } catch (error) {
        return next(error);
    }
}


module.exports = { getAllUser, getUserById, registerUser, login, updateUser}