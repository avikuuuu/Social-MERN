import { app } from "./app";
import { ConnectDB } from "./db";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

ConnectDB()
  .then(() => {
    app.listen(3000, (req, res) => {
      console.log("Server is running on port: ", 3000);
    });
  })
  .catch((err) => console.log("Error", err));
