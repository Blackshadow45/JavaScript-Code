//// type of operator
var myName="Viraj";
console.log(myName);
console.log(typeof myName);

//// What is output of typeof null
let badMemories=null;
console.log(typeof badMemories);

////convert a string into number
var num='18';
console.log(typeof +num);
console.log(typeof Number(num));

////convert a number into a string
let myFav=5;
console.log(myFav+"");
console.log(typeof (myFav+""));

//// ParseInt
const myString="42.5";
const myNum=parseInt(myString);
console.log(myNum);


/////ParseFloat
const myPf="42.5";
const myFp=parseFloat(myPf);
console.log(myFp);

/////NotanNumber
console.log(isNaN("Vinod"));

console.log(isNaN("5"));

/////concatenation in js

const chr = "Viraj" + " Deshmukhh";
console.log(chr);

/////Implicit coercion
let sum  = "5" - 5;
console.log(sum);
console.log(typeof sum);


let sum1="5"+10;
console.log(sum1);
console.log(typeof sum1);

let sum2="5"-10;
console.log(sum2);
console.log(typeof sum2);

console.log("Viraj"+"Viraj");

////Expressions and operators 

var result= "hello"/2;
console.log(result);

var result1=0.1+0.2;
console.log(result1);

var result2=0.2+0.2;
console.log(result2);

var result3=0.1+0.2;
console.log(result3.toFixed(2));

////string operators 
const str1 ="Viraj";
const str2=" Deshmukh";
const str3=str1+str2;
console.log(str3);

////comparison operator
console.log(5=="5");

///Strict equal to when using 3 times = to sign it check for datatype as well

/////Logical Operator
////Ternary operator


///defualt parameters
function addi(a=20,b=8){
    return a+b;

}
console.log(addi(10));

let a="5" - 2;
console.log(a);
console.log(typeof a);