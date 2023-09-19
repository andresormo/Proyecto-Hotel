const User = require("../api/users/user.models");
const { verifyToken } = require("../utils/jsonwebtoken");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.json("No estas autorizado");
        }

        const parsedToken = token.replace("Bearer ", "");
        const validToken = verifyToken(parsedToken);
        const userLoged = await User.findById(validToken.id);

        userLoged.password = null;
        req.user = userLoged;
        next();
    } catch (error) {
        return res.json(error);
    }
}

const isAdmin = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
    
        if (!token) {
            return res.json("No estás autorizado");
        }

        const parsedToken = token.replace("Bearer ", "");
        const validToken = verifyToken(parsedToken);
        const userLoged = await User.findById(validToken.id);


        if (userLoged.rol === "admin") {
            userLoged.password = null;
            req.user = userLoged;
            next();
        } else {
            return res.json("No tienes permiso de administrador");
        }

    } catch (error) {
        return res.json(error.name);
    }
}

module.exports = { isAuth, isAdmin }