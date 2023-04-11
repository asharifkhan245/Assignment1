// // Answer No #01

// let Client1 = prompt("Enter Number 1");
// let Client2 = prompt("Enter Number 2");

// let my1Num = Number(Client1);
// let my2Num = Number(Client2);

// let largest1 = Math.max ( my1Num , my2Num );
// console.log(" The Largest Number is " + largest1);


// let user = prompt("Enter a number:");

// if (user > 0) {
//   console.log("The sign is +");
// } else if (user < 0) {
//   console.log("The sign is -");
// } else {
//   console.log("The number is zero");
// }


// // Answer No #03

// let user1 = prompt("Enter number 1:");
// let user2 = prompt("Enter number 2:");
// let user3 = prompt("Enter number 3:");
// let user4 = prompt("Enter number 4:");
// let user5 = prompt("Enter number 5:");

// let my1user = Number(user1);
// let my2user = Number(user2);
// let my3user = Number(user3);
// let my4user = Number(user4);
// let my5user = Number(user5);

// let largest = Math.max(my1user, my2user, my3user, my4user, my5user);

// console.log("The largest number is: " + largest);

// // Answer No #04

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }

// // Answer No #05


// // let user = prompt("Enter Your Percentage");

// if (user >= 90) {
//     grade = " A ";
//     console.log (user + grade);
// } else if (user >= 80) {
//     grade = " B ";
//     console.log (user + grade);
// } else if (user >= 70) {
//     grade = " C ";
//     console.log (user + grade);
// } else if (user >= 60) {
//     grade = " D ";
//     console.log (user + grade);
// } else {
//     grade = " F ";
//     console.log (user + grade);
// }


// // Answer No #06


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }


// // Answer No #07

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }



// function employe(studentsName){
//     return " Welcome to class " + studentsName;

// }

// let data = employe("mughammad asharif");
// console.log (data);



function employe ( YourName, FatherName ){
    return YourName + FatherName ;
}

let data = employe (" <h1> Muhammd Asharif </h1> " , " <h1> Saleem </h1>" );
console.log (data);
document.write(data);
