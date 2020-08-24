const express = require('express');
const bodyParser = require('body-parser');

const leadRouter = express.Router();
leadRouter.use(bodyParser.json()); 
const Leaders = require('../models/leaders');

leadRouter.route('/')
.get((req, res, next) => {
    Leaders.find({}).then((Leaders) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(Leaders);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Leaders.create(req.body)
    .then((leader) => {
        console.log('Leader created! ', leader);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders') ;
})
.delete((req, res, next) => {
    Leaders.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


leadRouter.route('/:leadId')
.get((req, res, next) => {
    Leaders.findById(req.params.leadId)
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported in leaders/" + req.params.leadId);
})
.put((req, res, next) => {
    Leaders.findByIdAndUpdate(req.params.leadId, {
        $set: req.body
    }, { new: true })
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Leaders.findByIdAndRemove(req.params.leadId)
    .then((resp) => {
        res.statusCode = 200,
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = leadRouter;