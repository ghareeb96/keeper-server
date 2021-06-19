import Reminder from '../models/reminder.js';
import mongoose from 'mongoose';

export const createReminder = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const reminder = req.body;
    const newReminder = new Reminder({
        ...reminder,
        creator: req.userId
    })

    try {
        await newReminder.save();
        res.status(201).json(newReminder)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}

export const deleteReminder = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with that id')

    await Reminder.findByIdAndDelete(id);

    res.json({message : 'Reminder Deleted!'})
    

}

export const updateReminder = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const {id} = req.params;
    const reminder = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with that id')

    const updatedReminder = await Reminder.findByIdAndUpdate(id,reminder, {new : true} );

    res.json(updatedReminder)
    

}

export const getReminders = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    try {
        const userReminders = await Reminder.find({creator : req.userId})
        res.status(200).json(userReminders)
    } catch (error) {
        res.status(404).json({message: "No Reminders found"})
    }

}