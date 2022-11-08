import express from "express";
import { joinUser } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", joinUser);

export default globalRouter;
