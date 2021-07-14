import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import userRoutes from "./routes/user.js"
import noteRoutes from "./routes/note.js"
import reminderRoutes from "./routes/reminder.js"
import taskRoutes from "./routes/task.js"

const uri = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({limit : '30mb', extended : true}));
app.use(express.urlencoded({limit : '30mb', extended : true}));
app.use(cors());
app.use("/users", userRoutes)
app.use("/note", noteRoutes)
app.use("/reminder", reminderRoutes)
app.use("/task", taskRoutes)


// if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res)=>{
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }

mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log("connected to Port " + PORT)))
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false)
mongoose.pluralize(null);