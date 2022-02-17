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

// add/remove favorite hotels

userRouter.post("/:id", async (req, res) => {
  try {
    const favoriteHotelData = await User.find({favoriteHotels: "123"});//add idHotels
    if(favoriteHotelData){
     User.updateOne({_id: req.params.id}, {$pop: {favoriteHotels: "123"}}) //add idHotels
    } else{
      User.updateOne({_id: req.params.id}, {$push: {favoriteHotels: "123"}}) //add idHotels
    }
    res.status(404).json({message: "user is not found"});    
    res.status(200).json(favoriteHotelData);
  } catch (e:any) {
    res.status(500).json({message: e.message});
  }
})

export default userRouter;