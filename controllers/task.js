import Task from '../models/task.js';
import mongoose from 'mongoose';

export const createTask = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const task = req.body;
    const newTask = new Task({
        ...task,
        creator: req.userId
    })

    try {
        await newTask.save();
        res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}

export const deleteTask = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with that id')

    await Task.findByIdAndDelete(id);

    res.json({message : 'Task Deleted!'})
    

}

export const updateTask = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const {id} = req.params;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with that id')

    const updatedTask = await Task.findByIdAndUpdate(id,task, {new : true} );

    res.json(updatedTask)
    

}

export const completeTask = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const {id} = req.params;
    const task = req.body;
    const newTask = {...task, is_completed : !task.is_completed }

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with that id')

    const updatedTask = await Task.findByIdAndUpdate(id,newTask, {new : true} );

    res.json(updatedTask)
    

}

export const getTasks = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    try {
        const userTasks = await Task.find({creator : req.userId})
        res.status(200).json(userTasks)
    } catch (error) {
        res.status(404).json({message: "No Tasks found"})
    }

}