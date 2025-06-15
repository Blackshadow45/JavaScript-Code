   //* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a same time wants to find the sum of two numbers
  
function Sum(a,b){
    return a+b;
} 
var sum=0;
console.log(Sum(5,45));

// 1st student

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

function Sum(a,b){
    return a+b;
}
var sum=0;
console.log(Sum(10,5))

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// Calling the function

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".
function greet(name){
    console.log("Hello,"+name+ " welcome in Yuvaan Tech." )
}
greet("Vaishnavi");
//! 1. Write a function to find the sum of two numbers with parameters.
function add(a,b){
    console.log(a+b);
}
add(5,55); 

//* ==============================
//* Function expressions  
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.
 var result = function sum(a,b){
    return a+b;
 } 
 console.log(result(1,2)) ;
//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.
var result = function sum(a,b){
    return a+b;
 } 
 console.log(result(1,2)) ;  
//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();
var ans =(
    function(a,b){
         console.log(a+b);
         return a+b; 
    }
)(2,6);
console.log("The sum of two number is "+ans);

// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.
//    function calc(a,b,operator){
//     let result;
//     switch(operator){
        
//         case "+":
//             result=a+b;
//             break;

//         case "-":
//             result=a-b;
//             break;

//         default:
//             console.log("Inavlid operation");
//             case "/":
//                 result=a/b;
//                 break;
        
//                 case "*":
//                     result=a*b;
                 
//                     break;
            
        
//     }
//     return result;
//    }

//    console.log(calc(5,6,"+"));

function calc (a,b,operator){
    let result;
    switch(operator){
        case "+":
            result= a+b;
            break;

            case "-":
                result= a-b;
                break;

                case "*":
                    result= a*b;
                    break;

                    case "/":
                        result= a/b;
                        break;

                default:
                    console.log("Invalid operations.......Try again!")
                        }
                return result;
}

console.log(calc(4,5,"*"));
console.log(calc(4,5,"/"));
console.log(calc(4,5,"-"));
//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

function reverseSTR(word){
    let reverse =" ";
    for(let char=word.length-1; char>=0;char-- ){
        //console.log(word[char]);
        reverse= reverse+word[char];

    }
    return reverse;
}
 console.log(reverseSTR("Viraj Deshmukh"));

 const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("hello")); // Output: "olleh"

let revword =(str) => str.split("").reverse().join('');
console.log(revword("Viraj"));

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).
  
function isPalindrome(wrd){
    let reverse="";
    for(let char=wrd.length-1;char>=0;char--){
        reverse+=wrd[char];

    }
    if(reverse === isPalindrome){
        console.log("The given word is palindrome");
    }
    else{
        console.log("The given word is not palindrome");
    }
}
console.log(isPalindrome("Viraj"));

function revWRD(wr){  
    let revWRD="";                                                                                                      
 let revWRD1=(str) => str.split("").reverse().join("");
 if(revWRD===revWRD1){
    console.log("The given word id palindrome");
 }
 else{
    console.log("The given word is not palindrome");
 }

}
console.log(revWRD("Deshmukh"));

