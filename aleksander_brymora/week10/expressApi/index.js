const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;
const posts = [];

server.get('/', (req, res) => {
    const temp = {
        img: '',
        question: '',
        answer: ''
    };
    temp.img = `https://avatars.dicebear.com/v2/male/${Math.floor(Math.random()*1000)}.svg`;
    axios.get('http://jservice.io/api/random').then(response => {
        temp.question = response.data[0].question;
        temp.answer = response.data[0].answer;
        posts.push(temp);
        console.log(temp)
        res.render('trivia.ejs', { trivia: posts });
    });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));