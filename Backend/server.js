import app from "./src/app.js"
import dotenv from "dotenv";
dotenv.config();
import connectToDB from "./src/config/databse.js";

connectToDB()

app.listen(3000,()=>{console.log("server is running on port 3000")})