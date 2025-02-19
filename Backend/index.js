import express from "express";
import userRoute from "./routes/user.route.js";
import * as dotenv from "dotenv";
import jobRoute from "./routes/job.route.js";

const app = express();
app.use(express.json());
app.use(userRoute);
app.use(jobRoute);
dotenv.config();


const initapp = async () => {
  try {
    app.listen(5000, () => {
      console.log("Server Run On Port 5000");
    });
  } catch (error) {
    console.log(error.message);
  }
  
app.get("/", (req, res) => {
  res.send("Server berjalan dengan baik! 🚀");
});

};

initapp();
