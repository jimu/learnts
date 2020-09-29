"use strict";
var helloWorld = "Hello World";
// interface Pod {
// pod: number;
// }
var Pod = /** @class */ (function () {
    function Pod(pod) {
        this.pod = pod;
    }
    Pod.prototype.toString = function () {
        return "Pod[" + this.pod + "]";
    };
    return Pod;
}());
;
var pod = { pod: 1 };
var pod2 = new Pod(2);
//console.log(pod2);
console.log(pod + " " + pod2);
console.log(pod2 + "");
console.log('pod:', pod.toString());
