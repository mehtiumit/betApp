const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const betRoutes = require('./routes/bet')



const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());



let connectionString = "mongodb://localhost:27017/bet";

mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("MongoDB database connection established successfully");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(betRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});







