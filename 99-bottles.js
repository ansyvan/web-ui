// Write a program that prints out the lyrics to "99 Bottles of Beer on the Wall"
var word = "bottles";
var count = 99;
while (count > 1) {
    console.log(count + " " + word + " of beer on the wall,");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 1) {
        console.log(count + " " + word + " of beer on the wall.\n");
    } else if (count == 1) {
        console.log(count + " " + "bottle" + " of beer on the wall.\n");
        console.log(count + " " + "bottle" + " of beer on the wall,");
        console.log(count + " " + "bottle" + " of beer,");
        console.log("Take one down, pass it around,");
        console.log("No more " + word + " of beer on the wall.");
    }
}