import express from "express";
import {
    createNote,getNotes,deleteNote
} from "../controllers/note.js"

import auth from '../middleware/auth.js'

const router = express.Router();

router.get("/", auth, getNotes);
router.post("/add", auth, createNote);
router.delete("/:id", auth, deleteNote);

export default router;