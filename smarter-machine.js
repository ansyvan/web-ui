// The clunk function outputs the word "clunk" a specific number of times.
function clunk(times) {
    var num = times;
    // Repeat until num reaches 0
    while (num > 0) {
        display("clunk");   // Call display to print "clunk"
        num = num - 1;      // Decrease the counter
    }
}

// The main function that simulates a "smart machine"
function thingamajig(size) {
    var facky = 1;          // Variable to store the factorial result
    clunkCounter = 0;       // Reset the clunk counter before starting

    if (size == 0) {
        // If size is 0, display "clank"
        display("clank");
    } else if (size == 1) {
        // If size is 1, display "thunk"
        display("thunk");
    } else {
        // If size is greater than 1, calculate the factorial of size
        while (size > 1) {
            facky = facky * size; // Multiply facky by size
            size = size - 1;      // Decrease size by 1
        }
        // After calculating factorial, call clunk that many times
        clunk(facky);
    }
}

// The display function outputs text to the console
// and increments the global clunkCounter each time it's called
function display(output) {
    console.log(output);                // Print the output message
    clunkCounter = clunkCounter + 1;    // Increase the counter by 1
}

// Global variable that tracks how many times display() was called
var clunkCounter = 0;

// Call the thingamajig function with size 2
thingamajig(2);

// Output the total number of times display() was called
console.log(clunkCounter);
