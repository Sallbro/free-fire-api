const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env['PORT'] || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to free fire api server');
    res.end();
});

app.get('/characters/list', (req, res) => {
    const url = process.env['ENV_CHARACTER'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.get('/pets/list', (req, res) => {
    const url = process.env['ENV_PETS'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.get('/weapons/list', (req, res) => {
    const url = process.env['ENV_WEAPONS'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.get('/videos/list', (req, res) => {
    const url = process.env['ENV_VIDEOS'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.get('/wallpapers/list', (req, res) => {
    const url = process.env['ENV_WALLAPER'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.get('/news/list', (req, res) => {
    const url = process.env['ENV_NEWS'];
    axios.get(url).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log("error", err);
    });

});

app.listen(port, () => {
    console.log('something went wrong !');
});