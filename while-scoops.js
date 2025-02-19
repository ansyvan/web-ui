import { createInterface } from "readline";

var rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How many scoops of ice cream do you have? ", function(scoops) {
    scoops = parseInt(scoops);

    while (scoops > 0) {
        console.log("Another scoop!");
        scoops = scoops - 1;
    }
    console.log("Life without ice cream isn't the same");

    rl.close();
}
);