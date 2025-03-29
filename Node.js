const express = require('express');
const app = express();
const port = 3000;


app.get('/hello', (req, res) => {
    res.send('Hello world !');
});


app.get('/json', (req, res) => {
    res.json({ message: 'Це JSON-відповідь' });
});


app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Користувач з ID: ${userId}`);
});


app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Пошук за запитом: ${query}`);
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

