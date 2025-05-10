// Returning functions

function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        // setMode("bake");
        // setTemp(degrees);
    }

    return message;
}

var status = bake(350);
var status = bake(501);
var status = bake(99);

console.log("Tha oven says: " + status);