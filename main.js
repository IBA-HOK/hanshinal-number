const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/ping', (req, res) => {
    res.send('pong!');
});
app.get('/hanshin/:number', (req, res) => {
    //正の整数でなければエラー
    if (req.params.number <= 0 || req.params.number % 1 != 0) {
        res.send('正の整数を入力してください');
        return;
    }
    input = Number(req.params.number)
    res.send(`${input * 33} - ${input * 4}`);
});
