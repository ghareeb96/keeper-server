import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
        task: {
            type: String,
            required : true
        },
        description: {
            type: String,
        },
        creator: {
            type: String,
            required: true
        },
        is_completed:{
            type : Boolean,
            required : true
        },
        id: {
            type: String,
        }
    }, {
        timestamps: true
    }

)

export default mongoose.model('task', taskSchema)