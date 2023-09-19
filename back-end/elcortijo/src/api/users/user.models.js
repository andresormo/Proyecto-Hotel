const mongoose= require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        name:{type: String, required: true, trim:true},
        surname:{type: String, required: true, trim:true},
        image:{type: String},
        email:{ type: String, required: true, unique: true},
        password:{type: String, required: true},
        rol:{
            type: String,
            required: true,
            default: "user",
            enum:["user", "admin"]
        }
    },
    {
        timestamps: true,
        collection: "users"
    }
);

UserSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model("users", UserSchema);

module.exports = User;