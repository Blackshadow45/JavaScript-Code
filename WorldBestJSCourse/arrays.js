//// 
let arr=[];
console.log(typeof arr);
/// in output it will give object because The output is "object" because,
//  in JavaScript, arrays are a type of object. The typeof operator doesn't differentiate between plain objects and arrays—it just says "object" for both.

///creating arrays using array constructor
let fruits= new Array ('apple','banana','orange');
console.log(fruits);

/////creating an array using array literals
let fruit = ['apple','banana','orange'];
console.log(fruit);

//// we can also access elements on the basis of their index numbers but wan pass values directly 
let fruitss = ['apple','banana','orange'];
console.log(fruitss[1].toUpperCase());
console.log(fruitss['apple']);

/////Modifying arrays existing elements
let fruit1= new Array ('apple','banana','orange');
fruit1[1]='Mango';
console.log(fruit1);


////Array Travelsal
////////FOR OF LOOOP
let fruit2= new Array ('apple','banana','orange');
for(let item of fruit2){
    console.log(item);
}

let friends = ['vignesh','Nishant','Ganesh'];
for(let item of friends){
    console.log(item);
}

///FOR IN LOOP
let city =['Satara','Pune','Bengluru'];
for(let item in city){
    console.log(item);
}

let country =['India' , 'USA' ,'Ireland'];
for(let item in country){
    console.log(item);
}

///forEach array
let names=['Viraj','Tejal','Yuvan'];
names.forEach((curElem,index,arr)=>{
console.log(`${curElem} ${index}`)
//console.log(arr);
});

let food=['chicken','Mutton','paneer'];
food.forEach((curelem,index,arr)=>{
    //console.log(`${curelem} ${index}`);
    console.log(arr);
});

let relation = ['brother','sister','father'];
relation.forEach((curelem,index,arr)=>{
    console.log(curelem);
});

let vegetables=['Potato','tomato','carrot'];
const forEacharr =vegetables.forEach((curelem,index,arr)=>{
    return (`${curelem} ${index}`);
});
console.log(forEacharr); //it will give undefined cause when we use for each loop inside a variable it returns nothing and output will be UNDEFINED....

/// for Map
let river =['Ganga','yamuna','krishna'];
river.map((curelem,index,arr)=>{
    console.log(curelem);
});

let surnames = ['Deshmukh','Jadhav','pawar'];
const newArray = surnames.map((curelem,index,arr)=>{
    return (curelem);
});
console.log(newArray);
