/// reverse a string using for loop and bbuilt in functions
function newWord(wrd){
    let reverse="";
    for(let char=wrd.length-1;char>=0;char--){
        reverse=reverse+wrd[char];
    }
    return reverse;
}
console.log(newWord("Viraj"));

function newwrd(word){
    let reverse="";
    for(let char=word.length-1;char>=0;char--){
        reverse=reverse+word[char];
    }
    return reverse;
}
console.log(newwrd("I am A Billioniare"));

///reverse a string usng built in functions
let newword=(str)=>str.split("").reverse().join("");
console.log(newword("Viraj"));

////jumping on arrays 
let fruits=['Apple','Banana','Mango'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits['jackfruit']);
fruits[2]='Coconut';
console.log(fruits);

//for off loop
let city=['Satara','Pune','Mumbai'];
for(let item of city){
    console.log(item);
}

//for in loop
let city1=['Satara','Pune','Mumbai'];
for(let item in city1){
    console.log(`${item} ${city1}`);
}

//forEach loop
let country=['India','USA','Brazil'];
country.forEach((curelem,index,arr)=>{
    console.log(`${curelem} ${index}`);
});

//for map
let country1=['India','USA','Brazil'];
country1.map((curele,index,arr)=>{
    console.log(`${curele} ${index} ${arr}`)
});


let country1=['India','USA','Brazil'];
let a = country1.map((curele,index,arr)=>{
    return(arr);
});
console.log(a);


//// practice of all
 let fruits =['apple','banana','Mango'];
 console.log(typeof fruits);
 console.log(fruits);

 ////using array constructor
 let fruits = new Array('apple','banana','Mango');
 console.log(fruits);

 ////using array literals
 let fruits =['apple','banana','Mango'];
 console.log(fruits);

 ////Accessing elements 
 let fruits =['apple','banana','Mango'];
 console.log(fruits[1]);
 console.log(fruits['apple']);
 fruits[3]='Grapes';
 console.log(fruits);
 fruits[1]='Coconut';
 console.log(fruits);

 ////loops
 ////for of loop
 let fruits =['apple','banana','Mango'];
 for(let item of fruits){
    console.log(item);
 }

 ////for in loop
 let fruits =['apple','banana','Mango'];
 for(let item in fruits){
    console.log(item);
 }


 //// forEach loop
 let fruits =['apple','banana','Mango'];
 fruits.forEach((curelement,index,arr)=>{
    console.log(`The elements are ${curelement} ${index}`)
 });


 let fruits =['apple','banana','Mango'];
 const newArray=fruits.forEach((curele,index,arr)=>{
    return `The elements are ${curele}`;
 });
 console.log(newArray);

 ////Map() function
 let fruits =['apple','banana','Mango'];
 fruits.map((curele,index,arr)=>{
    console.log(`The elements are ${curele}`);
 });

 let fruits =['apple','banana','Mango'];
 const newCon=fruits.map((curele,index,arr)=>{
    return `The elements are ${curele}`;
 });
 console.log(newCon);

 //write a program to double wach element presemt in array
 let numbers =[1,2,3,4,5];
 numbers.forEach((curelem)=>{
    console.log(curelem*2);
 });

 let numbers =[1,2,3,4,5];
 const doublevalue=numbers.map((curele)=>{
    return curele*2;
 });
 console.log (doublevalue);


 /// push and pop  method
 const persons=["Viraj",'Vaishnavi','Tejal','yuvaan'];
 console.log(persons.push('Deshmukh'));
 console.log(persons.pop());
 persons.push('Deshmukh');
 console.log(persons);
 persons.push('Deshmukh');
 console.log(persons);

 ////Unshift method
 const persons=["Viraj",'Tejal','yuvaan','Deshmukh'];
 console.log(persons.unshift("Radha"));
 console.log(persons);

 ////shift Method
 const persons=["Viraj",'Tejal','yuvaan','Deshmukh'];
 console.log(persons.shift());
 console.log(persons);
 

//// splice method 

let color =['Black','White','red'];
console.log(color.splice(0));
console.log(color);
console.log(color.splice(0,1));
console.log(color);
color.splice(0);
console.log(color);

let cars =['BMW','Audii','Range Rover'];
console.log(cars.splice(1,1));
console.log(cars);
  cars.splice(0,2,"Merrcedes",'Wrangler');
  console.log(cars);

let cars =['BMW','Audii','Range Rover'];
console.log(cars.splice(0,0,'Toyota','Endeavour'));
console.log(cars);
cars.splice(2,0,'Wrangler');
console.log(cars);
cars.splice(-1,0,'Rubicon');
console.log(cars);
cars.splice(-2,0,'Porsche');
console.log(cars);
cars.splice(cars.length,0,'Thar','Camrii');
console.log(cars);
cars.splice(0,0,'Lexus');
console.log(cars);
cars.splice(cars.length,0,'');
console.log(cars);

////indexof method & includes()
const persons=['Viraj','Tejal','Yuvaan'];
console.log(persons.indexOf('Yuvaan'));
console.log(persons.includes('Viraj'));
console.log(persons);


///lastIndexof()
const numbers=[1,2,3,4,5,6,7,8,6,9];
console.log(numbers.lastIndexOf(6));
console.log(numbers.lastIndexOf(6,8));


//// filter method
///find() Method
const numbers = [1,2,3,4,5,6,7,8,9];
const result = numbers.find((curEle)=>{
    return curEle>5;
});
console.log(result);

//findIndex()
const numbers = [1,2,3,4,5,6,7,8,9];

const result=numbers.map((curEle)=>curEle*2);
console.log(result);
const result1=result.findIndex((curele)=>{
    return curele >10;
});
console.log(result1);

/// filter()

const numbers = [1,2,3,4,5,6,7,8,9];
const result = numbers.filter((curEle)=>{
    return curEle >4;
});
console.log(result);

const result1 = numbers.map((curele)=> curele *2
);
const result2 = result1.filter((curEle)=>{
    return curEle>10;
});
console.log(result2);

//q)lets user wants to delete value 6 from an array
const numbers = [1,2,3,6,4,5,6,7,8,9];
// let value=6;
const result = numbers.filter((curEle)=>{
    return curEle != 6;
});
console.log(result);


// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];

const filerByPrice = products.filter((curEle)=>{
    return curEle.price <= 500;
});
console.log(filerByPrice);

///filter unique values
const numbers = [1,2,3,4,6 ,5,6,7,8,9];
let uniqueValues =numbers.filter((curEle,index,arr)=>{
 //console.log(arr.indexOf(curEle));
 return arr.indexOf(curEle) == index;
});
console.log(uniqueValues);

console.log([...new Set(numbers) ]);


///Sorting of an array
const numbers = [1,2,3,4,6 ,5,6,7,8,9];

numbers.sort();
console.log(numbers);

const numbers = [1,2,3,4,6 ,5,6,7,8,9];
const res=numbers.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    else if(b>a){
        return -1;
    }
});
console.log(res);

//for descending order
const res1 = numbers.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
});
console.log(res1);


//////questions
const numbers = [1,2,3,4,6 ,5,6,7,8,9];
let res=numbers.map((curele)=>{
    if(curele%2 == 0){
        return curele * curele;
    }
    // else{
    //     return curele;
    // }
}).filter((curele)=>curele != undefined);
console.log(res);

////Reduce mrthod
const price=[100,200,300,450,500];
let totalPrice = price.reduce((accum,curele)=>{
 return accum+curele;
},0);
console.log(totalPrice);