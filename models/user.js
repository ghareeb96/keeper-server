import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_picture : {
        type : String
    },
    darkTheme:{
        type : Boolean
    },
    id: {
        type: String
    }
})

export default mongoose.model('user', userSchema)