import express from "express";
import {
    getTasks,createTask,deleteTask,updateTask
} from "../controllers/task.js"

import auth from '../middleware/auth.js'

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/add", auth, createTask);
router.delete("/:id", auth, deleteTask);
router.patch("/:id", auth, updateTask);

export default router;