const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
mongoose.connect(process.env.DB_URL)
    .then(app.listen(process.env.PORT))
    .then(() => { console.log(`DB Connect & App Started at ${process.env.PORT}`) });