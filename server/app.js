import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";


// CONFIGRATIONS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("assets", express.static(path.join(__dirname, "public/assets")));

// Routes Imports
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'



// Router configs
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)



export { app };
