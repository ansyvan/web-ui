// Test for jokes
var joke = "JavaScript walked into a bar....";
var toldJoke = false;
var punchLine = "Better watch out for those semi-colons";
var percentage = 20;
var result;

if (toldJoke == true) {
    console.log(punchLine);
} else {
    console.log(joke);
}

// Movie Night
var zipCode = 98104;
var joesFavouriteMovie = "Forbidden Planet";
var movieTicket$   =   9;

if (movieTicket$ >= 9) {
    console.log("Too much!");
} else {
    console.log("We're giong to see " + joesFavouriteMovie);
}

// Temperature calculating expression

var tempCelcius = 10;
var tempFarenheit = (9 / 5) * tempCelcius + 32;

console.log("The temperature is " + tempCelcius + " degrees Celcius");
console.log("The temperature is " + tempFarenheit + " degrees Farenheit");

// Color comparison

var color = "pink";

if (color != "pink") {
    console.log("What a lovely pink!");
}
else if (color != "orange") {    
    console.log("Orange is the color of oranges");
}
else {
    console.log("I don't know what color that is");
}

// Total points calculation

var level = 5;
var points = 30000;
var bonus = 3300;
var totalPoints = (level *points) + bonus;

console.log("The total points are: " + totalPoints);

// Adding number to string

var result = 1000 + "108";
console.log(result);