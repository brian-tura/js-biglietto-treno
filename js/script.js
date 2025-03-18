let dist = prompt("Please enter the desired distance");
let age = prompt("Please enter your age");
let price;
let roundedPrice;
const ticketPrice = 0.21;

if(age < 18) {
    price = (ticketPrice * dist) * (8/10);
}

if(age >= 65){
    price = (ticketPrice * dist) * (6/10);
}

roundedPrice = price.toFixed(2);

console.log(roundedPrice);