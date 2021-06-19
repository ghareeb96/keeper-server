import mongoose from 'mongoose';

const reminderSchema = mongoose.Schema({
        title: {
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        creator: {
            type: String,
            required: true
        },
        remind_time:{
            type : String,
            required : true
        },
        id: {
            type: String,
        }
    }, {
        timestamps: true
    }

)

export default mongoose.model('reminder', reminderSchema)