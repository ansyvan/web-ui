import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How many scoops of ice cream do you have? ", function(scoops) {
    scoops = parseInt(scoops);

    if (scoops >= 5) {
      console.log("Eat faster, the ice cream is going to melt!");
    } else if (scoops == 3) {
      console.log("Ice cream is running low!");
    }
    else if (scoops == 2) {
        console.log("You have two scoops left!");
    } else if (scoops == 1) {
        console.log("This is the last scoop!");
    } else if (scoops == 0) {
        console.log("Gone! Bring another ice cream!");
    } else {
        console.log("Still lots of ice cream left, come and get it.");
    }

    rl.close();
});