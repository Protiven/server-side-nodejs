const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json()); 

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the leaders to u!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + 
    ' with details ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders') ;
})
.delete((req, res, next) => {
    res.end('Deleting all the leaders!') ;
});


leaderRouter.route('/:leaderID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the leader: ' + req.params.leaderID);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not supported in leaders/" + req.params.leaderID);
})
.put((req, res, next) => {
    res.end('The leader changed: ' + req.params.leaderID) ;
})
.delete((req, res, next) => {
    res.end('The leader deleted: ' + req.params.leaderID) ;
});

module.exports = leaderRouter;