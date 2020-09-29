"use strict";
// Usage:
//
//  var pod : Pod = new Pod(Pod.Laser);
//
//  console.log(pod)
//
//    "Laser"
//
//  console.log(Pod.toString(Pod.Laser))
//
//    "Laser"
//
//  console.log(1)
//
//    "Laser"
//
/**
 * Represents an active or destroyed ship pod
 */
var Pod = /** @class */ (function () {
    function Pod(type) {
        this.type = type;
    }
    Pod.prototype._signaturePod = function () { };
    Pod.prototype.toString = function () {
        return this.type <= 100 ? Pod.TypeNames[this.type] : Pod.DestroyedTypeNames[this.type - 100];
    };
    /**
     * Returns a string representation of the Pod
     *
     * @param pod type
     * @return name
     */
    Pod.toString = function (type) {
        return type <= 100 ? Pod.TypeNames[type] : Pod.DestroyedTypeNames[type - 100];
    };
    /**
     * Returns the Pod type but destroyed
     * @param pod-type
     * @return pod-type (destroyed)
     */
    Pod.destroy = function (type) {
        return type + 100;
    };
    /**
     * Tests if pod is okay (not destroyed)
     * @param pod-type
     * @return true if undestroyed
     */
    Pod.okay = function (type) {
        return type > 0 && type < 100;
    };
    Pod.Invalid = 0;
    Pod.Laser = 1;
    Pod.Cabin = 2;
    Pod.Cargo = 3;
    Pod.DestroyedLaser = 101;
    Pod.DestroyedCabin = 102;
    Pod.DestroyedCargo = 103;
    Pod.TypeNames = ["Invalid", "Laser", "Cabin", "Cargo"];
    Pod.DestroyedTypeNames = ["Invalid", "Destroyed Laser", "Destroyed Cabin", "Destroyed Cargo"];
    return Pod;
}());
;
//type PodType = Pod.Invalid | Pod.Laser | Pod.Cabin | Pod.Cargo | Pod.DestroyedLaser | Pod.DestroyedCabin | Pod.DestroytedCargo;
module.exports = [Pod];
