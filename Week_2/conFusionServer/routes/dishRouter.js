const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json()); 

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the dishes to u!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + 
    ' with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes') ;
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes!') ;
});


dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the dish: ' + req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported in dishes/" + req.params.dishId);
})
.put((req, res, next) => {
    res.end('The dish changed: ' + req.params.dishId) ;
})
.delete((req, res, next) => {
    res.end('The dish deleted: ' + req.params.dishId) ;
});

module.exports = dishRouter;