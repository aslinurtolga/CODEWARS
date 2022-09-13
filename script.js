//The code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   a * b
// }

function multiply(a, b){
    a * b
    return a * b
  }

//********************************** */

 // 100 ile 200 sayılarının arasında 23'ün katı olan sayıların toplamını hesaplayıp ekrana yazdıralım.


 let i = 100;
 for (i = 0; i <= 200; i+=23){
  if ( i >= 100){
    sum += i
  }
 }
 console.log(sum);

 //********************************** */



 // eğer kullanıcı bilgisi varsa ekrana ismini yazdır
let username = prompt("Kullanici adinizi giriniz:")
 //eğer (username.length > 0) {console.log(username)} değilse {console.log("bilgi yok")}
 //if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}


 if (username.length > 0) {
  console.log(`Kullanici Bilginiz ${username}`);
 } else {
  console.log("Kullanici Bilgisi Yok");
 }

//********************************** */


const arr1 = [12, 14, 16]; 
const arr2 = [11, 13, 17];

const mergeArr = arr1.concat(arr2);
mergeArr.sort();
console.log(mergeArr);

//********************************** */

//* Jenny's secret message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

//Can you help her?


function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }

  // what we want to return for everyone except Johnny
  return "Hello, " + name + "!";
}

//********************************** */

//* Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  const result1 = n / x;
  const result2 = n / y;

  if (result1 % 1 === 0 && result2 % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// other solutions

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//********************************** */