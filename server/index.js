import { app } from "./app.js";
import { ConnectDB } from "./db/index.js";
import dotenv from "dotenv";
import { User } from "./models/user.model.js";
import { Post } from "./models/post.model.js";
import {users,posts} from './data/index.js'

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${"http://localhost:" + port}`);
    });
    // User.insertMany(users);
    // Post.insertMany(posts);
  }
  )
  .catch((err) => console.log("Error", err));
