"use strict";
exports.__esModule = true;
function error(message) {
    throw new Error(message);
}
try {
    var result = error("test");
    console.log({ result: result });
}
catch (error) {
    console.log({ error: error });
}
