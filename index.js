 import express, { Router } from "express";
 import 'dotenv/config'
 import { dbConnection } from "./config/db.js";

import { policeRouter } from "./routes/route.js";



 

 
 

// create express app
 const app = express();
 



//  //use route
 app.use(express.json());
 app.use(policeRouter);

//  const mongoUri = process.env.Mongo_url

dbConnection()

 //Listening Port
 app.listen(5020, () => {
    console.log('App is Working');
 })