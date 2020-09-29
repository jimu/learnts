var Coordinate /*implements CoordinateInterface*/ = /** @class */ (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    Coordinate.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    return Coordinate;
}());
;
var c1 = { x: 1, y: 2, z: 3 };
var c2 = new Coordinate(3, 4);
console.log('c1', c1 instanceof Coordinate ? 'Coordinate' : 'not Coordinate');
console.log('c2', c2 instanceof Coordinate ? 'Coordinate' : 'not Coordinate');
console.log("c1: " + c1);
console.log("c2: " + c2);
