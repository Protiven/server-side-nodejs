const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json()); 

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promotions to u!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + 
    ' with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions') ;
})
.delete((req, res, next) => {
    res.end('Deleting all the promotions!') ;
});


promoRouter.route('/:promoID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the promotion: ' + req.params.promoID);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported in promotions/" + req.params.promoID);
})
.put((req, res, next) => {
    res.end('The promotion changed: ' + req.params.promoID) ;
})
.delete((req, res, next) => {
    res.end('The promotion deleted: ' + req.params.promoID) ;
});

module.exports = promoRouter;