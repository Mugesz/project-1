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
