// for loop to find the icecream with bubblegum flavor

var products = [
    "Choco Choo Chocolate",
    "Icy Mint",
    "Cake Batter",
    "Bubblegum"
];

var hasBubbleGum = [
    false,
    false,
    false,
    true
];

for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
}