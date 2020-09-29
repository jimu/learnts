"use strict";
// Usage:
//
//  var pod : Pod = new Pod(Pod.Type.Laser);
//
//  console.log(pod)
//
//    "Laser"
//
//  console.log(Pod.toString(Pod.Type.Laser))
//
//    "Laser"
//
//  console.log(1)
//
//    "Laser"
//
// Notes:
//
//    * Uses Namespace Merging (for enum Pod.Type)
//
//      https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-namespaces-with-classes
//
Object.defineProperty(exports, "__esModule", { value: true });
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
    Pod.Laser = 1;
    Pod.TypeNames = ["Invalid", "Laser", "Cabin", "Cargo"];
    Pod.DestroyedTypeNames = ["Invalid", "Destroyed Laser", "Destroyed Cabin", "Destroyed Cargo"];
    return Pod;
}());
;
(function (Pod) {
    var Type;
    (function (Type) {
        Type[Type["Invalid"] = 0] = "Invalid";
        Type[Type["Laser"] = 1] = "Laser";
        Type[Type["Cabin"] = 2] = "Cabin";
        Type[Type["Cargo"] = 3] = "Cargo";
        Type[Type["DestroyedLaser"] = 101] = "DestroyedLaser";
        Type[Type["DestroyedCabin"] = 102] = "DestroyedCabin";
        Type[Type["DestroyedCargo"] = 103] = "DestroyedCargo";
    })(Type = Pod.Type || (Pod.Type = {}));
})(Pod || (Pod = {}));
exports.default = Pod;
module.exports = [Pod];
