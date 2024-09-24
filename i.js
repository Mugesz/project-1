// let amount = 1000;
// console.log("Your Bill Amount is $" + amount);

// let name = prompt("What is your Name?..");
// console.log("hi", name);

// let ticket = prompt("How many tickets : ");

// if(!isNaN(ticket)){
//     console.log(ticket * 5);
// } else {
//     console.log("Enter a valid Number")
// }

function convert() {
  const input = document.getElementById("input").value;
  let inch = input  * (9/5) + 32;

  const result = document.getElementById("result");
  result.innerHTML = inch.toFixed(2) + " "+"farenheat";
}
