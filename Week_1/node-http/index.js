const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;
var time = 60 * 5;


// В случае, если сервер работает слишком долго
var timer = setTimeout(() => {
    server.close();
    console.log(`Server closed. (${time} sec)`);
}, time * 1000)

updateTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        server.close();
        console.log(`Server closed. (${time} sec)`);
    }, time * 1000);
};

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + ' by method ' + req.method);
    
    // Обновление таймера
    updateTimer();

    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+ fileUrl);
        const fileExt = path.extname(filePath);

        if(fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    res.status = 404;
                    res.setHeader('Content-type', 'text-html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + " doesn't exist</h1></body></html>")
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-type', 'text-html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.status = 404;
            res.setHeader('Content-type', 'text-html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + ' not a html file </h1></body></html>')
            return;
        }
    }
    else {
        res.status = 404;
        res.setHeader('Content-type', 'text-html');
        res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>')
        return;
    }
});


server.listen(port, hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}`);
});