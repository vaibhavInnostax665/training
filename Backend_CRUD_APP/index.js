import express from "express";
import userRoutes from "./routes/user/user.route.js"

const app = express();

app.use(express.json());
app.use('/user',userRoutes);

app.listen(5000,()=>{
    console.log("App is running on PORT: 5000");
})