const Note = require('../models/Note.js');
const User = require('../models/User.js');

module.exports.fetchAllNotes = async (req, res) => {
    const notes = await Note.find({ user: req.userID });
    res.status(200).json(notes);
}

module.exports.addNote = async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        let userID = req.userID;
        let user = await User.findById(userID).select("-password");
        if (!user) return res.status(401).json({ 'msg': "Unautherized access" });

        let note = new Note({
            title,
            description,
            tag,
            user: userID
        });
        note = await note.save()

        res.status(200).json({ 'msg': "added note sucessfully", note })
    } catch (e) {
        res.status(500).json({ e });
    }
}