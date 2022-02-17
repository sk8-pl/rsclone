import { Router } from "express";
import Cities from "../models/Cities";

const citiesRouter = Router();

citiesRouter.post("/", async (req, res) => {
   try {
     const { city, country, image} = req.body;
     const newCities = new Cities({city, country, image});
     await newCities.save(); 
     res.status(201).json({message: "added cities"});
   } catch (e) {
      res.status(500).json({ message: e });
   }
   
});

citiesRouter.get("/", async (req, res) => {  
   try { 
     const citiesData = await Cities.aggregate([{$sample: {size: 5}}]);
     res.status(200).json(citiesData);
   } catch (err:any) {
     res.status(500).json({message: err.message});
   }
  })

export default citiesRouter;
