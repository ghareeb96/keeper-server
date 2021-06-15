import Note from '../models/note.js';

export const createNote = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    const note = req.body;
    const newNote = new Note({
        ...note,
        creator: req.userId
    })

    try {
        await newNote.save();
        res.status(201).json(newNote)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}

export const getNotes = async (req, res) => {

    if (!req.userId) return res.json({
        message: "Unauthenticated"
    });

    try {
        const userNotes = await Note.find({creator : req.userId})
        res.status(200).json(userNotes)
    } catch (error) {
        res.status(404).json({message: "No notes found"})
    }

}