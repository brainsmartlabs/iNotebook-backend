const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user_routes.js');
const notesRoutes = require('./routes/notes_routes.js');

dotenv.config();

const app = express();
mongoose.connect(process.env.DB_URL)
    .then(app.listen(process.env.PORT))
    .then(() => { console.log(`DB Connect & App Started at ${process.env.PORT}`) });

app.use(express.json()); //Else JSON in the requests will not be parsed

app.use('/api/auth', userRoutes);
