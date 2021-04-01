const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exitHook = require('async-exit-hook');
const { nanoid } = require('nanoid');
const ShortUrl = require('./models/ShortUrl');
const app = express();
const url = 'http://localhost:8000/';

const port = 8000;

app.use(express.json());
app.use(cors());


app.get('/', async (req,res)=>{
    const list = await ShortUrl.find();
    res.send(list);
});

app.get('/:shortUrl', async (req,res)=>{
    try {
        const result = await ShortUrl.findOne({shortUrl:url + req.params.shortUrl});
        if (result) res.status(301).redirect(result.originalUrl);
        else res.sendStatus(404);
    } catch {
        res.sendStatus(500);
    };
});

app.post('/links', async (req,res)=>{
    const data = req.body;
    data.shortUrl = url + nanoid(5);
    const shortUrl = new ShortUrl(data);

    try {
        await shortUrl.save();
        res.send(data);
    } catch (e) {
        console.error(e);
        res.status(500).send('Server internal issue');
    };
    
});

const run = async () => {
    await mongoose.connect('mongodb://localhost/shorturls',{ useNewUrlParser: true, useUnifiedTopology: true });

    app.listen(port, ()=>{
        console.log('Server started on ' + port);
    });

    exitHook(async callback => {
        await mongoose.disconnect();
        console.log(' mongoose was disconnected');
        callback();
    });
};

run().catch(e=>console.error(e));