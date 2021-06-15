import express from "express";
import {
    createNote,getNotes
} from "../controllers/note.js"

import auth from '../middleware/auth.js'

const router = express.Router();

router.post("/add", auth, createNote);
router.get("/", auth, getNotes);

export default router;