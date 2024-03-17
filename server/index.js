import { app } from "./app.js";
import { ConnectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${"http://localhost:" + port}`);
    });
  })
  .catch((err) => console.log("Error", err));
