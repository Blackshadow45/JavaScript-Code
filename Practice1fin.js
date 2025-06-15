/// 11 MAY 2025 Practice Session ///
/// Variables 
 x =5;
 console.log(x);
 console.log(typeof x);
 let y ;
 console.log(y);
 console.log(typeof y);

//  The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.


 // parseInt & parseFloat 
 "use strict";
  x = 5;
 console.log(x);
 
 y = 26.5;
 c=9898.398699576;
 console.log(parseInt(y));
 console.log(parseFloat(c));
 
 
  e ="876987.98798";
  console.log(parseInt(e));
  console.log(Math.round(parseInt(e)));
  //// both will have same output 

////NaN
console.log(isNaN('Vinod'));
console.log(isNaN("567"));
a = NaN==NaN; //// js traets every NaN as an unique value thats why its false 
console.log(a);

//// Strings
 var abc = "abcdefghijklmnopqrstuvwxyz";
 var str2 = "hey......!";
var esc = 'I don\'t \n know'; 
var len = abc.length;
console.log(len);
console.log(abc.indexOf('stuv'));
console.log(abc.lastIndexOf('stuv'));
console.log(abc.slice(3,5));
console.log(abc.replace("abc","123"));
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
console.log(abc.concat(" ", str2));
console.log(abc.charAt(5));
console.log(abc[2]);
console.log(abc.charCodeAt(2));
console.log("$$$$$");

console.log(abc.split(","));  ///- abc.split(",") looks for commas in the string "abcdefghijklmnopqrstuvwxyz" and splits it at those positions. However, since there are no commas in abc, the result is an array containing the whole string:

console.log("$$$$$");
console.log(abc.split(" "));    /// - abc.split(" ") looks for spaces, but again, abc has no spaces, so it returns the 

console.log("$$$$$");
let num7 = 255;
console.log(num7.toString(16));   //// Hexadecimal (base-16) is a numbering system that uses 16 symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. Numbers greater than 9 are represented using letters (A for 10, B for 11, ..., F for 15).


//// numbers and math
var pi = 3.141;
var ab ="897";
console.log(pi.toFixed(0));
console.log(pi.toFixed(2));
console.log(pi.toPrecision(2));
console.log(pi.valueOf());
console.log(Number(ab));
console.log(Number(new Date()));
console.log(parseInt("3 Months"));
console.log(parseFloat("3.5 days"));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

////Math.
var pi=Math.PI;
console.log(pi);
console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.pow(2,8));
console.log(Math.sqrt(49));
console.log(Math.abs(-3.5895));
console.log(Math.ceil(3.23));
console.log(Math.floor(3.99));
console.log(Math.sin(0));
console.log(Math.cos(Math.PI));
console.log(Math.min(0,3,-2,2));
console.log(Math.max(0,3,-3,2));
console.log(Math.log(1));
console.log(Math.exp(1));
console.log(Math.random());
console.log(Math.floor(Math.random()*5)+1);

//// Loops
   ///For Loop
for(let i=0;i<5;i++){
        console.log("Hello World....!");
        
}

///While loop
let k=0;
while(k<3){
   console.log("Hey it's Me...!");
   k++;
}

/////do-while Loop
let i=0;
do{
        console.log("Viraj Deshmukh.....!");
        i++;
}while(i<6);


//// for in loop
let phone={
        companyName : "Google",
        Model : "Pixel 9 pro",
        origin:"USA",
         specification:{
                Storage:'1TB',
                camera:"12Mpx,50Mpx",
                battery:'5000mAh'
         }
}
for(let key in phone){
        console.log(key,phone[key]);
        
}
for(let val in phone.specification){
        console.log(val,phone.specification[val]);
        
}


//// control statement 
///if-else
let num=5;
if(num>0){
        console.log(`${num} is Greater than 0`);
        
}
else{
        console.log(`${num} is less than 0`);
        
}

////switch statement
let num1=5;
 switch(num1){
        case 1:
              console.log("Number is  1");
               break;
        case 0:
                              console.log("Number is 2");
                        break;
        case 3:
                              console.log("Number is 0");
       break;
        default:
                              console.log("Number is greater than 1 ");

 }

 /// ternary operator 
 let num2 =10;
 let res = num2>=0 ? "positive" : "negative";
 console.log(res);
 
//// object function 
    //// object.assign
let person ={
        name:"Viraj"
}
console.log(person);

const Newperson=Object.assign({},person,{
        name:"Raj",
        age:23
});
console.log(Newperson);

 ////by using spread operator
  const newPer = {...person,...{
        name:'Virat',
        age:36
  }};
  console.log(newPer);
  
   //// object.defineProperty()
   const address={};
    
   Object.defineProperty(address,'name',{
        value:'Atit',
        writable:false,
        enumerable:true
   });
   address.name='viraj';
console.log(address.name);
console.log(address);

  //// object,entries()
 const phones = {
        brand:"samsung",
        model:'S23 Ultra'
 }

 const phoneArray = Object.entries(phones);
 console.log(phoneArray);
 
   ///fromentries
const phones1=[
        ["brand","samsung"],
        ['model','s23 ultra']
   ]
const phoneAsobject=Object.fromEntries(phones1);
console.log(phoneAsobject);

  //// freeze
const per = {
        name:'shivtej',
        age:24
}
Object.freeze(per);
///per.city='satara';
console.log(per);


///Arrays
var dogs=['Bulldog','Beagle','labrodor']
var cats=['pinku'];
var dogs=new Array('Bulldog','Beagle','labrodor');
///alert(dogs[1]);    /// use alert() only in browser
console.log(dogs[1]);


dogs[1]='local dog';
console.log(dogs);

for(let a=0;a<dogs.length;a++){
        console.log(dogs[a]);
        
}
////reverse string
        // let revWord=(str)=>str.split('').reverse().join('');
        // console.log(revWord('viraj'));


///// methods in arrays
console.log(dogs.toString());
console.log(dogs.join("*"));
console.log(dogs.pop());
console.log(dogs.push('tuffy'));
console.log(dogs[dogs.length]="tommy");
console.log(dogs)
dogs.shift();
console.log(dogs);
dogs.unshift("Sweety");
console.log(dogs);

console.log(dogs);
dogs.splice(2,0,'pug','boxer');
console.log(dogs);
 
var animals=dogs.concat(cats);
console.log(animals);
console.log(dogs);
dogs.slice(1,4);
console.log(dogs);
dogs.sort();
console.log(dogs);
dogs.reverse();
console.log(dogs);

///loops in array
    /// for of loop
let fruits =['apple','mango','banana'];
for(let item of fruits){
        console.log(item);
        
}

///// for in loop
for(let item in fruits){
        console.log(item);
        
}

//// for each loop
fruits.forEach(curEle,indexe,arr)=>{
        console.log(`${curEle} ${index} ${arr}`);
}





/////Concatenation in js i.e implicit and explicit coercion 
 let sum ="0"-5;
 console.log(sum); /// when operator is minus then pure math is happen

 let sum1 ="5"+1;
 console.log(sum1); ///// when operator is + then concatination happens 

 console.log("viraj"-"viraj");
 console.log(true+true);
 console.log(false - false);


///// Expressions and operators 
        ///// Assignment operator
var result = "hello"/2;
console.log(result);

var result1 =0.1+0.2;
console.log(result1);

var result2 =0.2+0.2;
console.log(result2);

var result3 = 0.1+0.1;
console.log(result3.toFixed(3));

//// String operator 
    //// comaparision operator 
 let a = 5 =="5";   /// `==` checks only for value, (allowing type conversion)
 console.log(a);

 let b = 5 ==='5';  /// `===` checks both value and datatype (no type conversion)
 console.log(b);
