require('dotenv').config();
const express = require('express');
const multer = require('./multer');

const app = express();

app.use(express.json());

app.post('/upload', multer.single('arquivo'), async (req, res) => {
    console.log(req.file);
    return res.json({ mensagem: 'Tudo certo!' })
});

app.listen(process.env.PORT);