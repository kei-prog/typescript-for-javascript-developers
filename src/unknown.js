"use strict";
exports.__esModule = true;
var kansu = function () { return 43; };
var numberAny = kansu();
var numberUnknown = kansu();
var sumAny = numberAny + 10;
console.log(typeof numberUnknown);
if (typeof numberUnknown === "number") {
    var sumUnknown = numberUnknown + 10;
}
