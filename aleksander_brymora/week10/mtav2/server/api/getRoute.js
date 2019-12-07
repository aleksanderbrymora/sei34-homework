const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//GET Route
router.get('/', async (req, res) => {
    const getRoute = await loadDB();
    res.send('getRoute');
});

const loadDB = async () => {
    mongoose.connect(
        'mongodb+srv://user123:user123@mta-cil4h.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log('Connected to DB')
    );
};

module.exports = router;