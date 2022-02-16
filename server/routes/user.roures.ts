import { Router } from "express";
import User from "../models/User";

const userRouter = Router();

// get UserData

userRouter.get("/:id", async (req, res) => {  
  try { 
    const userData = await User.findOne({_id:req.params.id}, {password:0});
    res.status(200).json(userData);
  } catch (err:any) {
    res.status(500).json({message: err.message});
  }
 })
 
//Change user data

userRouter.patch("/:id", async (req, res) => { 
   try { 
     const id = req.params.id;
     const { email, name, phone, surname } = req.body; 
     const userData = await User.updateOne({ _id: id }, {$set: { email: email, name: name, surname: surname, phone: phone}});
     if(!userData){
      
       res.status(404).json({message: "user not found"});
     } 
    
     res.status(200).json(userData);
   } catch (err:any) {
     res.status(500).json({message: err.message});
   }
});

export default userRouter;