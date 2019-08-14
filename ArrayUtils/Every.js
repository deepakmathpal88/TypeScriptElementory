"use strict";
exports.__esModule = true;
function isBigEnough(element, index, array) {
    return (element >= 10);
}
exports.isBigEnough = isBigEnough;
var result = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + result);
