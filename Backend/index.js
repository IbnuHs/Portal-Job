import express from "express";

const app = express();
app.use(express.json());

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
