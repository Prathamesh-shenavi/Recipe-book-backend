import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())
//Routers import
import userRouter from "./routes/user.routes.js";
import recipeRouter from "./routes/recipe.routes.js";

app.use("/api/users", userRouter);
app.use("/api/recipes", recipeRouter);
export default app;
