const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});