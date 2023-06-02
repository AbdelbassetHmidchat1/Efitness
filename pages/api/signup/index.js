import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import { errorHandler, validateAllOnce } from "../../../utils/common";
import bcrypt from "bcrypt";

dbConnect();





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