// let storedData = [];

// var form = document.getElementById("formData");
// var detailz = document.getElementById("detailz");
// var details = document.getElementById("details");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   var name = document.getElementById("name");
//   var password = document.getElementById("password");
//   let userData = { name: name.value, password: password.value };
//   let userData1 = JSON.stringify(userData);
//   storedData.push(userData1);

//   localStorage.setItem("data", storedData);
// });

// window.addEventListener("DOMContentLoaded", () => {
//   let data = localStorage.getItem("data");
//   let res = JSON.parse(data);
//   console.log(typeof res);

//   // data = JSON.parse(data);
//   // let res = [...data];
//   // console.log(res);
//   Array.from(data).map((element) => {
//     // console.log(element);
//     var li = document.createElement("li");
//     li.className = "list";
//     let value = document.createTextNode(data);
//     li.appendChild(value);
//     details.appendChild(li);
//   });
// });

//********************************** if the given string is palindrome  ************************ */

// function check_palindrome(str) {
//   let j = str.length - 1;
//   for (let i = 0; i < j / 2; i++) {
//     let x = str[i]; //forward character
//     let y = str[j - i]; //backward character
//     if (x != y) {
//       // return false if string not match
//       return 0;
//     }
//   }
//   // / return true if string is palindrome
//   return 1;
// }
// console.log(check_palindrome("nitin"));
//************************************ Next permutation  ******************************** */

// function nextPermutation(n, arr) {
//   if (n == 1) {
//     return arr;
//   }
//   let i = 0;
//   for (i = n - 1; i >= 0; i--) {
//     if (arr[i] > arr[i - 1]) {
//       break;
//     }
//   }

//   if (i != 0) {
//     for (let j = n - 1; j >= i; j--) {
//       if (arr[i - 1] < arr[j]) {
//         //Swap
//         let temp = arr[i - 1];
//         arr[i - 1] = arr[j];
//         arr[j] = temp;
//         break;
//       }
//     }
//   }
//   arr = arr.slice(0, i).concat(arr.slice(i, arr.length).reverse());
//   return arr;
// }

//**************************** Union of two arrays ************************* */

// function getUnion(a, n, b, m) {
//   var s = new Set();

//   // Inserting array elements in set as set accepts only distinct values
//   for (let i = 0; i < n; i++) {
//     s.add(a[i]);
//   }
//   for (let i = 0; i < m; i++) {
//     s.add(b[i]);
//   }
//   return s.size;
// }

// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3];
// console.log(getUnion(a, 5, b, 3));

//************************** Kadane's Algorithm *************************  */

// function maxSubArraySum(a, size) {
//   let max_so_far = a[0];
//   let curr_max = a[0];

//   for (let i = 1; i < size; i++) {
//     curr_max = Math.max(a[i], curr_max + a[i]);
//     max_so_far = Math.max(max_so_far, curr_max);
//   }

//   return max_so_far;
// }

// // Driver code

// let a = [1, 2, 3, -2, 5];
// let n = a.length;
// console.log(maxSubArraySum(a, n));

//****************************** Longest Palindrome in a String *******************  */

// function longestPalSubstr(str) {
//   let n = str.length;

//   // table[i][j] will be false if
//   // substring str[i..j] is not palindrome.
//   // Else table[i][j] will be true
//   let table = new Array(n);
//   for (let i = 0; i < n; i++) {
//     table[i] = new Array(n);
//   }
//   // All substrings of length 1 are palindromes
//   let maxLength = 1;
//   for (let i = 0; i < n; i++) {
//     table[i][i] = true;
//   }

//   // check for sub-string of length 2.
//   let start = 0;
//   for (let i = 0; i < n - 1; i++) {
//     if (str[i] == str[i + 1]) {
//       table[i][i + 1] = true;
//       start = i;
//       maxLength = 2;
//     }
//   }

//   // Check for lengths greater than 2.
//   // k is length of substring
//   for (let k = 3; k <= n; k++) {
//     // Fix the starting index
//     for (let i = 0; i < n - k + 1; i++) {
//       // Get the ending index of substring from
//       // starting index i and length k
//       let j = i + k - 1;
//       // checking for sub-string from ith index to
//       // jth index iff str.charAt(i+1) to
//       // str.charAt(j-1) is a palindrome
//       if (table[i + 1][j - 1] && str[i] == str[j]) {
//         table[i][j] = true;

//         if (k > maxLength) {
//           start = i;
//           maxLength = k;
//         }
//       }
//     }
//   }

//   return str.substring(start, start + maxLength);
// }
// let str = "forgeeksskeegfor";
// console.log(longestPalSubstr(str));

//****************************** Remove Consecutive Characters  ********************* */

// function removeConsecutiveDuplicates(input) {
//   if (input.length <= 1) {
//     return input;
//   }
//   if (input[0] == input[1]) {
//     return removeConsecutiveDuplicates(input.substring(1));
//   } else {
//     return input[0] + removeConsecutiveDuplicates(input.substring(1));
//   }
// }

// console.log(removeConsecutiveDuplicates("ababbaa"));

//************************ Reverse a linked List */*********************** */

// var reverseList = function (head) {
//   let current = head;
//   let next = head.next;

//   head.next = null;
//   while (current != null && next != null) {
//     let temp = next.next;
//     next.next = current;
//     current = next;
//     next = temp;
//   }
//   return current;
// };

//***************************  kth smallest element in matrix ******************  */

// function kthSmallest(mat, n, k) {
//   let a = new Array(n * n);
//   let v = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       a[v] = mat[i][j];
//       v++;
//     }
//   }
//   a.sort();
//   let result = a[k - 1];
//   return result;
// }

// let mat = [
//   [16, 28, 60, 64],
//   [22, 41, 63, 91],
//   [27, 50, 87, 93],
//   [36, 78, 87, 94],
// ];
// let res = kthSmallest(mat, 4, 3);
// console.log(res);

//******************************** This & fat arrow function ***************************/
// "use strict";

// this.table = "Window table";

// const cleanTable = function (soap) {
//   console.log(`Cleaning ${this.table} using ${soap}`);
// };
// cleanTable.call(this, "water"); //Cleaning table using water

// this.garage = {
//   table: "garage table",
// };
// // cleanTable.call(this.garage, "water");

// let johnsRoom = { table: "johns table" };
// cleanTable.call(johnsRoom, "water");

// const cleanTable = function (soap) {
//   const innerFunction = function (soap) {
//     console.log(`Cleaning ${this.table} using ${soap}`);
//   };
//   innerFunction.call(this, soap);
// };
// cleanTable.call(this, "water"); //Cleaning table using water

//Eligibility program

// const eligibility = function (marks) {
//   if (marks < 40) console.log(`${this.name} is not eligible`);
//   else {
//     console.log(`${this.name} is  eligible`);
//   }
// };

// let Student = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// const student1 = new Student("Rahul", 25);
// eligibility.call(student1, 35);

// const student2 = new Student("Radhika", 25);
// eligibility.call(student2, 50);

// const student3 = new Student("Roopa", 55);
// eligibility.call(student3, 80);

//************************* Callback functions ************************** */

// var count = 0;

// function eventHandler() {
//   let click = document.getElementById("clickMe");
//   click.addEventListener("DOMContentLoaded", () => {
//     console.log(`clicked  me`);
//   });
// }
// eventHandler();
// DOMCONTENTLOADED;

// setTimeout(() => console.log("timer1 expired"), 1000);
// setTimeout(() => console.log("timer2 expired"), 0);
// function x(y) {
//   console.log("inside x");
//   y();
// }
// x(function y() {
//   setTimeout(() => console.log("inside y"), 0);
// });

//*********************************** Implement stack  ************************** */

// push(q1, q2, num);
// {
//   q2.push(x);
//   while (q1.length !== null) {
//     q2.push(q1.pop());
//     q1.pop();
//   }
//   let q = q1;
//   q1 = q2;
//   q2 = q;
// }

// pop();
// {
//   if (q1.length == 0) {
//     return;
//   }
//   q1.pop;
// }

//*********************************** Implement queue  ************************** */

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.min = 0;
//     this.max = 0;
//   }

//   push(element) {
//     this.queue.push(element);
//     this.max++;
//   }

//   pop() {
//     if (this.min < this.max) {
//       let elementToPop = this.queue[this.min];
//       this.queue[this.min] = undefined;
//       this.min++;
//     } else {
//       throw new Error("Array is empty");
//     }
//   }

//   front() {
//     console.log(this.queue[this.max - 1]);
//   }

//   rear() {
//     console.log(this.queue[this.min]);
//   }

//   displayQueue() {
//     console.log(`Queue - ${this.queue}, Min: ${this.min}, Max : ${this.max}`);
//   }
// }

// let queue1 = new Queue();
// queue1.push(4);
// queue1.push(5);
// queue1.push(6);

// queue1.pop();

// queue1.displayQueue();
// queue1.rear();
// queue1.front();

//***********************************  Callbacks *************************** */

// const posts = [
//   {
//     title: "Post one",
//     body: "This is post one",
//     createdAt: new Date().getTime(),
//   },
//   {
//     title: "Post two",
//     body: "This is post two",
//     createdAt: new Date().getTime(),
//   },
// ];

// let intervalId = 0;

// function getPosts() {
//   clearInterval(intervalId);

//   intervalId = setInterval(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li> ${post.title} -- last updated ${Math.floor(
//         (new Date().getTime() - post.createdAt) / 1000
//       )} seconds ago</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ ...post, createdAt: new Date().getTime() });

//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: Something went wrong");
//       }
//     }, 2000);
//   });
// }

// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.pop();

//       if (posts.length != 0) {
//         resolve();
//       } else {
//         reject("Array is empty now");
//       }
//     }, 4000);
//   });
// }

// function createFourthPost(post, callback) {
//   setTimeout(() => {
//     posts.push({ ...post, createdAt: new Date().getTime() });
//     callback();
//   }, 2000);
// }

// createPost({
//   title: "Post three",
//   body: "This is post three",
// })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// deletePost()
//   .then(getPosts)
//   .catch((err) => console.log(err));

// //OR if we want to run both promises at a single time

// Promise.all([deletePost, createPost])
//   .then(getPosts)
//   .catch((err) => console.log(err));

//****************************** promises **************************** */

// console.log("person1: shows ticket ");
// console.log("person2: shows ticket");

// const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 1000);
// });
// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//   console.log(`husband: Lets go in`);
//   console.log(`wife:No, I am hungry`);
//   return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`);
//   });
// });
// const getButter = getPopcorn.then((t) => {
//   console.log("Wife: I want extra butter ");
//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter`);
//   });
// });

// getColdDrinks = getButter.then((t) => {
//   console.log(`I want Cold drinks`);
//   return new Promise((resolve, reject) => {
//     resolve(` Cold drinks`);
//   });
// });

// getColdDrinks.then((t) => console.log(t));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

//*************************** Async await   */

// console.log("person1: shows ticket ");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//   const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ticket"), 3000);
//   });

//   const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

//   const getButter = new Promise((resolve, reject) => resolve("Butter"));

//   const getColdDrinks = new Promise((resolve, reject) => resolve("coldrinks"));

//   //If we want to call all Promises at once
//   // let [pop, butt, cold] = await Promise.all([
//   //   getPopcorn,
//   //   getButter,
//   //   getColdDrinks,
//   // ]);
//   // console.log(`${pop} , ${butt}, ${cold}`);

//   let ticket = await promiseWifeBringingTicket;

//   console.log(`Husband:I have ${ticket} We should go in`);
//   console.log(`Wife: No, I am hungry`);

//   let popcorn = await getPopcorn;
//   console.log(`Husband:I got ${popcorn}`);
//   console.log(`Wife: I need extra butter`);

//   let butter = await getButter;
//   console.log(`Husband:I got ${butter}`);
//   console.log(`Wife: Lets go!, we are getting late`);

//   let coldDrinks = await getColdDrinks;
//   console.log(`Had a good ${coldDrinks}`);

//   return ticket;
// };

// preMovie().then((m) => console.log(m));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");
