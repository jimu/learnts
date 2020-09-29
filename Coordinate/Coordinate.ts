interface CoordinateInterface {
    x: number;
    y: number;
    toString(): void;
    //_signatureCoordinate(): void;
}

class Coordinate /*implements CoordinateInterface*/ {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x},${this.y})`;
    }

    private _signatureCoordinate(): void {};
};

const c1 : Coordinate = {x:1, y:2};
const c2 : Coordinate = new Coordinate(3, 4);

console.log('c1', c1 instanceof Coordinate ? 'Coordinate' : 'not Coordinate');
console.log('c2', c2 instanceof Coordinate ? 'Coordinate' : 'not Coordinate');

console.log(`c1: ${c1}`);
console.log(`c2: ${c2}`);
