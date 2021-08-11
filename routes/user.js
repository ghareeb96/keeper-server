import express from "express";
import {
    signin,
    signup,
    // updatePicture,
    // changeTheme
    updateUser
} from "../controllers/user.js"
import auth from '../middleware/auth.js'

const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/updateUser/:id", auth, updateUser);
// router.patch("/changeTheme/:id", auth, changeTheme);

export default router;