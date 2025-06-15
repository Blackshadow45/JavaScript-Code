///Arrays

const cars=['BMW','Audii','Range Rover','Lexus'];
console.log(cars);
console.log(cars[1]);
cars [3]='Porshe';
console.log(cars);

///Array travelsal
///for of loop
for(let item of cars){
    console.log(item);
}

///for in loop
for(let item in cars){
    console.log(item);
}

///forEach loop
cars.forEach((curEle,index ,arr)=>{
    console.log(`The Elements are ${curEle} ${index}`)
});

let errFore=cars.forEach((curele)=>{
    return curele;
});
console.log(errFore);

cars.map((curele,index,arr)=>{
    console.log(`The elements are ${curele} ${index}`);
});

let err1=cars.map((curele,index,arr)=>{
    return `${curele} ${index}`;
});
console.log(err1);


//push() method
cars.push('Defender');
console.log(cars);

///pop() method
cars.pop();
console.log(cars);

///unshift Method
cars.unshift('Lambo');
console.log(cars);

///shift method
cars.shift();
console.log(cars);

///splice method
cars.splice(2,0);
console.log(cars);

cars.splice(0,0,"Wrangler");
console.log(cars);

cars.splice(cars.length,0,'Thar');
console.log(cars);

cars.splice(-1,0,'Rubicon');
console.log(cars);


///searching method
//indexof()
console.log(cars.indexOf("BMW"));
console.log(cars.includes('Ferrari'));
console.log(cars);


///Last index of 
let numbers=[1,2,3,4,5,4,5,4,6];
const result=numbers.lastIndexOf(4,4);
console.log(result);


// filter method
//find method
const res1=numbers.find((curele)=>{
    return curele>4;
});
console.log(res1);

//findondex()
const res2=numbers.findIndex((curele)=>{
    return curele>5;
});
console.log(res2);

const res3=numbers.filter((curele)=>{
    return curele>4;
});
console.log(res3);