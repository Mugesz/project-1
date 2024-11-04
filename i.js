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

// function convert() {
//   const input = document.getElementById("input").value;
//   let inch = input  * (9/5) + 32;

//   const result = document.getElementById("result");
//   result.innerHTML = inch.toFixed(2) + " "+"farenheat";
// }

// let str = "If you're visiting this page"

// let str1 = "it can also be a fun way to surprise others."

// console.log(str.concat(str1));

// console.log(str.concat(" ",str1));

// console.log(str.substr(8,16))

// console.log(str1.replaceAll('i','t'))

// PRINT RANDOM STRING

// let value = "Mugesh";

// let randomLetter = value.charAt(Math.floor(Math.random() * value.length));

// console.log(randomLetter);

// TEMPLAE LITERALS

// let Fn = "mugesh";
// let Ln = "kanna";
// let city = "cbe";

// let combine = Fn + " " + Ln + " " + "Lives In " + city;
// let msg = `${Fn} ${Ln} Lives In ${city}`;

// console.log(combine);
// console.log(msg);

// let items = 5;
// let amt = 95;

// let message = `"You have ${items}items  in your cart.
// Your bill amount is $${amt}"`;
// console.log(message)

// ARRAYS

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.length);
// console.log(arr[8])
// console.log(arr[arr.length-1])

// let array = [5, 7, 6, [1,2], "hello"];
// // console.log(array[3][0])
// console.log(array[4])

// let arr = ["a","c","e","f"];

// arr.push('t')   //add last element in array
// console.log(arr)

// arr.pop()  // remove the last element in array
// console.log(arr)

// arr.shift()  // remove first element from array
// console.log(arr)

// arr.unshift("g"); //add first element in array
// console.log(arr)

// arr.splice(2,0,'k') //add or remove or replace  the elements whereever you want with the help of index values
// console.log(arr);

// console.log(arr.slice(-2)); //starting and ending index last index value is not included

// console.log( arr.reverse()) // reversing the array permenently

//  let str =  arr.join()
//  console.log(str); // convert array to string

// let string = "g,t,b,e";
// let array = string.split(",")  // convert string to array;
// console.log(array);

// let yak = [1, 2, 3];
// let dho = [4, 5, 6];

// // let joins = yak.concat(dho); // join two array in single arrazy

// // let joins = [...yak,...dho];  // spread operator
// console.log(joins);

// Arr=[5,8,10,7,9,11];

// let ans = Arr.splice(3,3,17,19,11)  // replacing array
//  Arr.unshift(100) // insert 100 in the beginning
// Arr.push(1000) //add 1000 at last
// Arr.splice(3,0,0);

// console.log(Arr)

// IF ELSE CODITION

// let pwd_crt = false;

// if(pwd_crt){
//     console.log("success")
// } else{
//     console.log("failed")
// }

// console.log("bye")

// a=20, b=30
// let c

// // if(a>b){
// //    c = a
// // } else {
// //     c = b
// // }

//  c = a>b?a:b  // ternary operator

// console.log(c)

// FD CALUCLATOR

// function calculate() {
//   const months = parseInt(document.getElementById("input").value);

//   if (months < 3) {
//     rate = 5.4;
//   } else if (months > 3 && months <= 6) {
//     rate = 6.5;
//   } else if (months >= 7 && months <= 9) {
//     ratem = 6.8;
//   } else {
//     rate = 7;
//   }

//   const result = document.querySelector("#result");

//   result.innerHTML = `your intrest rate is ${rate} %`;
// }

// function checking() {
//     const left = document.getElementById("input").value; // Get input as a string
//     const right = left.split("").reverse().join(""); // Reverse the string

//     let ans;
//     if (left === right) {
//         ans = "It is a palindrome";
//     } else {
//         ans = "It is not a palindrome";
//     }

//     const result = document.querySelector("#result");
//     result.innerHTML = ans;
// }

/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/

// const button = document.querySelector("button");
// //  event listner

// button.addEventListener("click", displayStats);

// function displayStats() {
//   const input = document.getElementById("input");
//   const city = input.value;

//   let population = 0,
//     litracyRate = 0,
//     language = "";
//   switch (city) {
//     case "Bengaluru":
//       population = 8443675;
//       litracyRate = 88.71;
//       language = "kannada";
//       break;

//     case "Chennai":
//       population = 865845;
//       litracyRate = 68.71;
//       language = "Tamil";
//       break;

//     case "Delhi":
//       population = 656588;
//       litracyRate = 98.71;
//       language = "Hindi";
//       break;

//     case "Mumbai":
//       population = 989854;
//       litracyRate = 80.71;
//       language = "Hindi";
//       break;
//   }

//   let text = `The Indian city of ${city} has a population of ${population}. language spoken is ${language} and litracy rate is ${litracyRate}%.`;

//   document.getElementById("result").innerHTML = text;
// }

// objects

// let item = {
//   name: "Mobile",
//   price: 25000,
//   quantity: 1,
//   dimensions: {
//    length:7,
//    breadth:3.5,
//    height:.5
//   }
// };

// console.log(item)

// let item2 = new  Object();
//  item2.name = 'earpods'
//  item2.price = 700
//  item2.quantity=2
//  // dot notation
//  console.log(item2.quantity)
//  console.log(item.dimensions.height)

//  // square notation
//  console.log(item['price'])

// // Loops
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// i=10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// i =10;
// do{
//   console.log(i)
//   i--;
// }while(i>=1)

//   // continue demo skips the current iteration

//   for(i=0; i<=10;i++){
//     if(i%3==0)
//       continue
//     console.log(i)
//   }
// //  out put
// //   1
// // 2
// // 4
// // 5
// // 7
// // 8
// // 10

// let arr = ['apple', 'orange', 'grapes','mango']

// for (i=0; i<arr.length; i++){
//   console.log(arr[i].toUpperCase())
// }

// for (let fruit of arr)
//   console.log(fruit)

// item = {
//   name: "phone",
//   quantity: 1,
//   price: 25000,
// };

// for (let key in item) {
//   console.log(item[key]);
// }

// FLIPPER COLORS

// function Flipper() {
//   const colors = ["#7FFFD4", "#B2FFFF", "#20B2AA", "#00CCFF", "#007A74"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   const wrapper = document.getElementById("wrapper");
//   wrapper.style.backgroundColor = randomColor;
// }

// addEventListener

// // FLIPPER
// function Flip() {
//   const colors = ["#7FFFD4", "#B2FFFF", "#20B2AA", "#00CCFF", "#007A74"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   const wrapper = document.getElementById("wrapper");
//   wrapper.style.backgroundColor = randomColor;
// }

// const button = document.getElementById("flipper");
// button.addEventListener("click",Flip);

// Fetching Razor pay Api

// async function getData() {
//   const url = "https://api.razorpay.com/v1/payments/";
//   try {
//     const Response = await fetch(url);
//     const json = await Response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// // TYPES OF FUNCTIIONS

// function isPositive(num) {
//   return num > 0;
// }

// console.log(isPositive(5));

// function findProduct(a, b) {
//   return a * b;
// }

// console.log(findProduct);
// console.log(typeof findProduct);

// // DEFAULT pARAMETERS

// function greet(name = "there") {
//   console.log("hi", name);
// }

// greet("mugu");
// greet();

// // FACTORIAL

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// // console.log(factorial(5))
// const card = document.getElementsByClassName("card1")[0];
// const card1 = document.getElementsByClassName("card2")[0];
// const card2 = document.getElementsByClassName("card3")[0];
// const card3 = document.getElementsByClassName("card4")[0];
// const card4 = document.getElementsByClassName("card5")[0];

// card.addEventListener("mouseover", hovering1);
// card.addEventListener("mouseout", resetWidth1);

// card1.addEventListener("mouseover", hovering2);
// card1.addEventListener("mouseout", resetWidth2);

// card2.addEventListener("mouseover", hovering3);
// card2.addEventListener("mouseout", resetWidth3);

// card3.addEventListener("mouseover", hovering4);
// card3.addEventListener("mouseout", resetWidth4);

// card4.addEventListener("mouseover", hovering5);
// card4.addEventListener("mouseout", resetWidth5);

// function hovering1() {
//   card.style.width = "40%";
// }

// function resetWidth1() {
//   card.style.width = "10%";
// }

// function hovering2() {
//   card1.style.width = "40%";
// }

// function resetWidth2() {
//   card1.style.width = "10%";
// }

// function hovering3() {
//   card2.style.width = "40%";
// }

// function resetWidth3() {
//   card2.style.width = "10%";
// }

// function hovering4() {
//   card3.style.width = "40%";
// }

// function resetWidth4() {
//   card3.style.width = "10%";
// }

// function hovering5() {
//   card4.style.width = "40%";
// }

// function resetWidth5() {
//   card4.style.width = "10%";
// }


// const cards = document.getElementsByClassName("flex-div")[0].children;  // Get all cards
// let currentCard = 0;
// let autoExpandInterval;

// // Function to automatically expand cards every 5 seconds
// function startAutoExpand() {
//   autoExpandInterval = setInterval(() => {
//     resetAllCards();  // Reset all cards to the original size before expanding the next
//     cards[currentCard].style.width = "40%";  // Expand current card
//     currentCard = (currentCard + 1) % cards.length;  // Move to the next card, loop back after last card
//   }, 3000);  // 5 seconds interval
// }

// // Function to reset all cards to original width
// function resetAllCards() {
//   for (let card of cards) {
//     card.style.width = "10%";
//   }
// }

// // Start the automatic card expansion when the page loads
// startAutoExpand();

// // Add hover event listeners to each card to stop the automatic animation
// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];

//   card.addEventListener("mouseover", () => {
//     clearInterval(autoExpandInterval);  // Stop the automatic animation on hover
//     card.style.width = "40%";  // Manually expand the card on hover
//   });

//   card.addEventListener("mouseout", () => {
//     card.style.width = "10%";  // Reset width when hover ends
//     startAutoExpand();  // Optionally restart automatic animation after hover
//   });
// }


const cards = document.getElementsByClassName("flex-div")[0].children;  // Get all cards
let currentCard = 0;
let autoExpandInterval;

// Function to automatically expand cards every 2 seconds
function startAutoExpand() {
  autoExpandInterval = setInterval(() => {
    resetAllCards();  
    cards[currentCard].style.width = "40%";  
    currentCard = (currentCard + 1) % cards.length;  
  }, 2000);  
}

// Function to reset all cards to original width
function resetAllCards() {
  for (let card of cards) {
    card.style.width = "10%";
  }
}

// Start the automatic card expansion when the page loads
startAutoExpand();

// Add hover event listeners to each card to stop the automatic animation
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("mouseover", () => {
    clearInterval(autoExpandInterval);  // Stop the automatic animation on hover
    expandHoveredCard(card);  // Expand hovered card, shrink others
  });

  card.addEventListener("mouseout", () => {
    resetAllCards();  // Reset width of all cards when hover ends
    startAutoExpand();  // Optionally restart automatic animation after hover
  });
}

// Function to expand hovered card and shrink others
function expandHoveredCard(hoveredCard) {
  for (let card of cards) {
    if (card === hoveredCard) {
      card.style.width = "40%";  // Expand the hovered card to 40%
    } else {
      card.style.width = "10%";  // Shrink all other cards to 1%
    }
  }
}
