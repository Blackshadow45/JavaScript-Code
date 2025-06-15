// variables
var my_Name="viraj";
console.log(my_Name);

var $city="Pune";
console.log($city);

/// type of operator

console.log(typeof($city));

///whats the output of null its will be object
var badMemories = null;
console.log(typeof(badMemories));

// convert string into number : we need to add an + sign before the value 
let convert = "16";
console.log(typeof +convert);
console.log(typeof Number(convert));

//convert a number into string : 
var convert1 = 18;
console.log(typeof String(convert1));
console.log(typeof (convert1+" "));

///parse int and parse float
//parseint
const num=42.5;
const res = parseInt(num);
console.log(res);

var num1=45.8897;
var res1 = parseInt(num1);
console.log(res1);

///parsefloat
var num3=43.97;
var res2=parseFloat(num3);
console.log(res2);

var num4 =56.987;
var res4 = parseFloat(num4);
console.log(res4);

console.log(parseInt(56.98));
console.log(parseInt(123 , 14));  ///chech the answer

//// NotAnNumber : when using nan no matter you writing number in double quote it still considered as  an number not an string
console.log(isNaN("vinod"));
console.log(isNaN("8768"));
console.log(isNaN(8743));

///strings 
//concatenation
const str="Hello"+"World";
console.log(str);

const str1 ="Hello "+"Viraj";
console.log(str1);

// coercion
// there are two type of coericion implicit and explicit 
 let sum = "5"- 5;
 console.log(sum);

 let sum1 = 5+5;
 console.log(sum1);

 var sum2 = 5*3;
 console.log(sum2);

 var sum3="5"+ 12;
 console.log(sum3);
 ///imp note there is + in between string and number cancatination happens


/// expression and operators
var res6 = 0.1+0.2;
console.log(res6);

var res7=0.3+0.6;
console.log(res7.toFixed(3));

///string operator
const st1="hello";
const st2=" viraj";
const st3=st1+st2;
console.log(st3);

//// comparision operator
console.log(5=="5");
console.log(5==="5");
/// when you use == its only compare the values and give result and when you use === its checks for datatype as well

/// logical operators

/// ternary operators
let age = 15;
result = age >18 ? "yes": "no";
console.log(result);

/// important
console.log(2<6<22);

console.log("20"+10+10);

///control statements
//if else
///Q)Check if a number is odd or even in JavaScript??
var n=23;
if(n%2==0){
    console.log("Given number is even");
}

else{
    console.log("given number is odd");
}

///Q3)Check if input variable is a number or not

function isNum(num){
    if(isNaN(num)){
        console.log(`${num} is not an number`);
    }
    else{
        console.log(`${num} is a number`);
    }
}
isNum(456);
isNum("Viraj");
isNum("345");

///Q4) Find the largest of three number
function isLarger(num1,num2,num3){
    if(num1>num2 || num1>num3){
        console.log(`${num1} is greater number among the list`);
    } 
    else if(num2>num3){
        console.log(`${num2} is greater number among the list`);
    }
    else{
        console.log(`${num3} is greater number among the list`);
    }
}
isLarger(456,52,5);
isLarger(326,6,5);

////switch statement 


////functions
function greet(){
    console.log("Welcome.......!");
}
greet();

///immmediately invoked functions
var ans=(function(a,b){
    console.log(a+b);
})(6,7);

////in ifelse section there sre functions more examples

/// fat arrow function
const sum3=(a,b)=>{
console.log(`the sum of number ${a} and number ${b} is ${a+b}`);
}
sum3(6,7);

const square=(a)=>{
    console.log(`the sqaure of ${a} is ${a*a}`);
}
square(5);

const greet1=()=>{
    console.log("viraj Deshmukh");
}

///reverse an string
let revWord=(str)=>
    str.split("").reverse().join("");
console.log(revWord("Viraj"));
console.log(revWord);

let revWRD=(str)=>str.split("").reverse().join("");
console.log(revWRD("viraj"));
console.log(revWRD);

////Arrays

let arr=[];
console.log(typeof(arr));

////creating an array using array constructor
let fruits=new Array("apple","banan","mango");
console.log(fruits);

///using array literals
let fruitss=["apple","banan","mango"];
console.log(fruitss);

//accessing elements using index number
let fruit=["apple","banan","mango"];
console.log(fruit[1]);

//modifying elements
let fruit1=["apple","banan","mango"];
fruit1[1]="orange";
console.log(fruit1);

/// iterrating over arrays 
let fruit2=["apple","banan","mango"];
for(let item of fruit2){
    console.log(item);
}

for(let item=0;item<=fruit2.length;item++){
    console.log(fruit2[item]);
}



