import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import { errorHandler, validateAllOnce } from "../../../utils/common";
import bcrypt from "bcrypt";

dbConnect();
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)


export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (error) {
      return res.status(400).json({ message: "srry" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;
      validateAllOnce(req.body)
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({
        ...req.body,
        password:hashPassword
  
      });
      const saveUser = await user.save()
      if(saveUser){
        const userDoc=saveUser._doc;
        delete userDoc.password;
        return res.status(201).json({ message: "let's goo",userDoc });
        
        
      }else{
        errorHandler("something went wrong",res)
      }      
    } catch (error) {
      console.log(error)
      
    }

}
}