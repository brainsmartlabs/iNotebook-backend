const express = require('express');
const { fetchAllNotes, addNote } = require('../controllers/note_controller');
const { addNoteValidate, addNoteValidationRules } = require('../middlewares/addNoteValidator');
const tokenValidator = require('../middlewares/jwtValidator');
const noteRouter = express.Router();


noteRouter.get('/fetchAllNotes', tokenValidator, fetchAllNotes);
noteRouter.post('/addNote', addNoteValidationRules(), addNoteValidate, tokenValidator, addNote)

module.exports = noteRouter;