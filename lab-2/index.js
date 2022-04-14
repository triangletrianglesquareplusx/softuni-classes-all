'use strict'

class Point{
    static distance(point1, point2){
       let a = Math.abs(point1.x - point2.x);
       let b = Math.abs(point1.y - point2.y);
       return Math.sqrt(a ** 2 + b ** 2);
    }
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let myFirstPoint = new Point(1,2);
let mySecondPoint = new Point(3,4);

console.log(Point.distance(myFirstPoint, mySecondPoint));





