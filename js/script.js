let dist = prompt("Please enter the desired distance");
let age = prompt("Please enter your age");
let price
const ticketPrice = 0.21;

if(age < 18) {
    price = (ticketPrice * dist) * (8/10);
}

console.log(price)