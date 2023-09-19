const jwt = require("jsonwebtoken");

const generateSign = (id, email)=>{
    return jwt.sign({id, email}, process.env.JWT_SECRET, {expiresIn:'30d'});
};

const verifyToken = (token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {generateSign, verifyToken}