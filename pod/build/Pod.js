"use strict";
var PodType;
(function (PodType) {
    PodType[PodType["Invalid"] = 0] = "Invalid";
    PodType[PodType["Laser"] = 1] = "Laser";
    PodType[PodType["Cabin"] = 2] = "Cabin";
    PodType[PodType["Cargo"] = 3] = "Cargo";
    PodType[PodType["DestroyedLaser"] = 101] = "DestroyedLaser";
    PodType[PodType["DestroyedCabin"] = 102] = "DestroyedCabin";
    PodType[PodType["DestroyedCargo"] = 103] = "DestroyedCargo";
})(PodType || (PodType = {}));
//stype : string[] = ["Invalid", "Laser", "Cabin", "Cargo"];
var Pod = /** @class */ (function () {
    function Pod(type) {
        this.type = type;
    }
    Pod.prototype.toString = function () {
        return "POD[" + this.type + "]";
        //return `${this.stype[this.type]},${this.y}]`;
    };
    return Pod;
}());
;
/*
Pod.Invalid = 0;
Pod.Laser = 1;
Pod.Cabin = 2;
Pod.Cargo = 3;
Pod.DestroyedLaser = 101;
Pod.DestroyedCabin = 102;
Pod.DestroyedCargo = 103;

Pod.Types = {
      '0':     'Invalid',
      '1':     'Laser',
      '2':     'Cabin',
      '3':     'Cargo',
      '101':   'DestroyedLaser',
      '102':   'DestroyedCabin',
      '103':   'DestroyedCargo',
    };
 */
/*
Pod.toString = type =>
{
    return Pod.Types[type];
}
 */
var p1 = { type: 1 };
var p2 = new Pod(PodType.Laser);
console.log('p1', p1 instanceof Pod ? 'Pod' : 'not Pod');
console.log('p2', p2 instanceof Pod ? 'Pod' : 'not Pod');
console.log("p1: " + p1);
console.log("p2: " + p2);
