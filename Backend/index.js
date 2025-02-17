import express from "express";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(userRoute);

const initapp = async () => {
  try {
    app.listen(5000, () => {
      console.log("Server Run On Port 5000");
    });
  } catch (error) {
    console.log(error.message);
  }
};

initapp();
