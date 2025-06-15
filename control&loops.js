//important question
let a =5;
console.log(a);
let b = a++;
console.log(a);
console.log(b);
console.log(a+b);

////conditional and loops

/// If--------else
// Q: What is the syntax of an if-else statement in JavaScript?
if("0"){
    console.log("truthy");
}
else{
    console.log("falsy");
};




let x = 10;
if (x = 5) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}


if (true && "false") {
    console.log("Yes");
} else {
    console.log("No");
}

/// q: rewrite following code using ternary operator
let age = 18;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
///solution:
let age=18;
console.log(age>=18?"Adult":"Minor");

//question:What will be logged?
let a = 1, b = 2, c = 3;
if (a > b) 
    if (b > c) 
        console.log("A");
    else 
        console.log("B");
else 
    console.log("C");
//Ans: C

///Q:Why is this giving an unexpected output?
if (false) 
    console.log("One");
else if (false) 
    console.log("Two");
else 
    console.log("Three");
///solution: all the previous conditions (if and else if) are false, the code inside the else block executes.

///Real-World Scenarios

//Q: How can you check if a user is logged in?

// let user = "John";
// if ( ??? ) {
//     console.log("Welcome, " + user);
// } else {
//     console.log("Please log in");
// }

let user = "John";
if ( user ) {
    console.log("Welcome, " + user);
} else {
    console.log("Please log in");
}

///Q: