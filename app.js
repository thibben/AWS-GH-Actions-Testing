const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use('/static', express.static('static'));


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, ()=>{
    console.log("Server listening on PORT: ", PORT);
});