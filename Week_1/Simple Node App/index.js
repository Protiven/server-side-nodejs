var rect = require("./rectangle");

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l, b, (err, rect_obj) => {
        if(err) {
            console.log("ERROR: " + err.message);
        } 
        else {
            console.log( "perimeter = " + rect_obj.perimeter() + "\narea = " + rect_obj.area() + "\nid = " + rect_obj.id);
        }
        console.log("MODULE LOADED!");
    });     
    console.log("module loaded!");
}

setTimeout(() => solveRect(2, 4), 2007); // Выполняется единожды


var k = 0;
var interval = setInterval(() => {
    if (k < 10){
        console.log(k);
        k = k + 1;
    }
    else{
        console.log("Interval clear!");
        clearInterval(interval);
    }
}, 1000); // Выполняется постоянно

solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

console.log("Hello");