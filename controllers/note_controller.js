
const Note = require('../models/Note.js');
const User = require('../models/User.js');

module.exports.fetchAllNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json(notes);
}

module.exports.addNote = async (req, res) => {
    const { title, description, tag } = req.body;
    let userID = req.userID;
    let user;
    let note;
    // try {
    user = await User.findById(userID).select("-password");
    note = new Note({
        'title': title,
        'description': description,
        'tag': tag,
        'user': user._id
    });
    note = await Note.save();
    console.log(note);
    res.status(200).json({ 'msg': "added note sucessfully", note })
    // } catch (e) {
    //     res.status(500).json({ e });
    // }
}