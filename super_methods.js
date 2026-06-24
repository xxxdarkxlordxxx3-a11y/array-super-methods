/**
 * @file super_methods.js
 * @description A lightweight JavaScript utility that supercharges standard Arrays.
 * @author MAHMOUZ
 * @version 1.0.0
 * @license MIT
 * @copyright 2026 MAHMOUZ. All rights reserved.
 */
Array.prototype.numExport = function () {
    return this.filter((e, i, a) => typeof e === "number");
}
Array.prototype.removeRepeats = function () {
    return [...new Set(this)];
}
Array.prototype.isEmpty = function () {
    if (this.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
Array.prototype.clearArray = function () {
    return this.length = 0;
}
Array.prototype.randomIndexNum = function () {
    if (this.length === 0)
        return undefined;
    else
        return this[Math.floor(Math.random() * this.length)];
}


// created by MAHMOUZ
