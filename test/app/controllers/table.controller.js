var Table = require('mongoose').model('Table');
var path = require("path");

exports.getAll = (req, res, next) => {
    if (req.user) {
        Table.find((err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getOne = (req, res, next) => {
    if (req.user) {
        Table.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getMyTable = (req, res, next) => {
    if (req.user) {
        var username = req.user.username;
        console.log(username);
        Table.find({ author: username }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        }).sort({ time: 'desc' });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}


exports.create = (req, res, next) => {
    if (req.user) {
        var Table = new Table(req.body);
        Table.author = req.user.username;
        Table.save(function (err) {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                res.json(Table);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}
