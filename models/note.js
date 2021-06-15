import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
        title: {
            type: String,
        },
        body: {
            type: String,
            required: true
        },
        creator: {
            type: String,
            required: true
        },
        id: {
            type: String,
        }
    }, {
        timestamps: true
    }

)

export default mongoose.model('note', noteSchema)