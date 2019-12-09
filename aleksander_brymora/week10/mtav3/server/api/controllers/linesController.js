const mongoose = require('mongoose');
const Lines = mongoose.model('Lines');

exports.listAllLines = (req, res) => {
    Lines.find({}, (err, lines) => {
        if (err) res.send(err);
        res.json(lines);
    })
};

exports.createLine = (req, res) => {
    const newLine = new Lines(req.body);
    newLine.save((err, line) => {
        if (err) res.send(err);
        res.json(line);
    })
};

exports.listRoute = (req, res) => {
    let Lines;
    Lines.find({}, (err, lines) => {
        if(err) res.send(err);
        Lines = lines;
    })

};