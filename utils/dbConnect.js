const mongoose = require('mongoose')

export default async function dbConnect(){
    try {
        await mongoose.connect("mongodb+srv://AbdelbassetHmidchat:Ghita123.@cluster0.k2eucvl.mongodb.net/",{useUnifiedTopology:true, useNewUrlParser:true,autoIndex:true})

        
    } catch (error) {
        console.log(error)

    }

}