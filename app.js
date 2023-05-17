import express from "express";
import fs from 'fs/promises';

const app = express();
const port = 3000;


// ----- LEVEL 1 -----------------------------

app.get('/status', (req, res) => {
    res.status(200).send("OK")
});


// ----- LEVEL 2 -----------------------------


app.get('/posts', (req, res) => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => res.status(200).send(data))
        .catch((error) => {
            res.status(500).send('Internal Server Error');
        });
});


app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
});