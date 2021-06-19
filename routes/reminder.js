import express from "express";
import {
    getReminders,createReminder,deleteReminder,updateReminder
} from "../controllers/reminder.js"

import auth from '../middleware/auth.js'

const router = express.Router();

router.get("/", auth, getReminders);
router.post("/add", auth, createReminder);
router.delete("/:id", auth, deleteReminder);
router.patch("/:id", auth, updateReminder);

export default router;