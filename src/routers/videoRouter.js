import express from "express";
import { handleWatch, handleEdit } from "../controllers/videoController";

const videoRouter = express.Router();

//always put functions on top of router.get()
videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;
