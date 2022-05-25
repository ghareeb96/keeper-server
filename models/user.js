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
    profile_picture: {
        type: String
    },
    darkTheme: {
        type: Boolean
    },
    mobile: {
        type: String
    },
    birthdate: {
        type: Date
    },  
    id: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model('user', userSchema)