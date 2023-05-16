import express from "express";
import fs from 'fs/promises';

const app = express();
const port = 3000;


// ----- LEVEL 1 -----------------------------

app.get('/status', (req, res) => {
    res.status(200).send("OK")
});


// ----- LEVEL 2 -----------------------------


app.get('/posts', async (req, res) => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(json);

        await fs.writeFile('./posts.json', JSON.stringify(json, null, 2))
        const postFile = await fs.readFile('./post.json', 'utf-8');
        const formattedData = JSON.parse(postFile);

        res.send(formattedData);

    } catch (error) {
        console.log('Something went wrong!', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
});