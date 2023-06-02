const mongoose = require("mongoose")




const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        len:3,
        trim:true

    },
    email:{
        type:String,
        required:true,
        unique: true,
        index: true
    },
    password:{
        type:String,
        required:true,
        trim:true,

    }},{
        timestamps:true
    }



)
mongoose.models={}
export default mongoose.models.user || mongoose.model('user',userSchema)