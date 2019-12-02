const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.set('view-engine', ejs);

const PORT = 1337;
const posts = [];

server.get('/', (req, res) => {
    const temp = {
        image: '',
        question: '',
        answer: ''
    };
    axios.get(`https://avatars.dicebear.com/v2/male/${Math.floor(Math.random()*1000)}.svg`).then(response => {
        console.log(response);
        temp.img = response.data;
        axios.get('http://jservice.io/api/random').then(response => {
            temp.question = response.data.question;
            temp.answer = response.data.answer;
            posts.push(temp)
            console.log(temp);
            res.render('trivia.ejs', {trivia: posts});
        });
    });
});

const fetchData = () => {
    const temp = {
        image: '',
        question: '',
        answer: ''
    };
    axios.get(`https://avatars.dicebear.com/v2/male/${Math.floor(Math.random()*1000)}.svg`).then(response => {
        console.log(response);
        temp.img = response.data;
        axios.get('http://jservice.io/api/random').then(response => {
            temp.question = response.data.question;
            temp.answer = response.data.answer;
            posts.push(temp)
            console.log(temp);
            res.render('trivia.ejs', {trivia: posts});
        });
    });
};

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));