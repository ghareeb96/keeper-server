import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import userRoutes from "./routes/user.js"
import noteRoutes from "./routes/note.js"
import reminderRoutes from "./routes/reminder.js"

const uri = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes)
app.use("/note", noteRoutes)
app.use("/reminder", reminderRoutes)

mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log("connected to Port " + PORT)))
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false)
mongoose.pluralize(null);