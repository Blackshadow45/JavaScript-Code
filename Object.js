//// there are several ways to create objects in js object literals

const product = {
    id:1,
    pName:"Laptop",
};

let person = {
    name : "Viraj",
    age : 24,
    isStudent: false,    //// first
    greet: function(){
        console.log("Welcome to My World");
    },
};

let person1 = {
    name : "Viraj",
    age : 24,
    "is'Student": false,    //// second
    ///"is\"Student": false,
    greet: function(){
        console.log("Welcome to My World");
    },
};

/// Accessing Properties

//? you can access object properties using dot notation or square bracket notation 
console.log(person.age);
console.log(person.name);
console.log(person.isStudent);

console.log(person1[`is'Student`]);
console.log(person1["is'Student"]);



////? you can add new properties or modify existing ones:
person.job="Java Full Stack Developer";
//// person["job"]="Java Full Stack Developer";
////person.age=23;
person["age"]=23;
console.log(person);

///// METHODS 

///? 
console.log(person.greet());
person.greet();


//// we can add dynamic keys in an object
let id="studentid";
let student = {
    [id]:  "1",
    sName: "Viraj",
    age: 23 ,
    isStudent : true,
    greet:   function(){
        console.log(
            `Hey , my ${id} is ${student[id]} and name is ${student.sName}.`
        );
        
    },

};
student.greet();


/// data Modeling

let car={
   brand : "Land Rover",
   Model: "Autobiography",
   year : 2027,
   start : function(){
    console.log("Engine started");
    
   },
};
car.start();

//// pass by value 

let a =10;
const func = (x)=>(x = 20);
console.log(func(a));
console.log(a);

/// pass by refrence 
let obj ={id:1,name:"Blackshadow"};
let obj1 =obj;
obj1.name = "Viraj Deshmukh";
console.log(obj1);
console.log("original",bj);


//// this 


const product1 = {
      id: 1,
      name: "Laptop",
      category: "Computers",
      brand: "ExampleBrand",
      price: 999.99,
      stock: 50,
      description:
        "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
      image: "image link will be added during projects",
    };
//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

let keys = Object.keys(product1);
console.log(keys);
 
//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.

let values = Object.values(product1);
console.log(values);

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
let entries = Object.entries(product1);
console.log(entries);

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
console.log(product1.hasOwnProperty("name")); // Output: true

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 5 };
const source = { b: 3, c: 4 };
const merge = Object.assign(target,source);
console.log(merge);


//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
Object.freeze(product1);
product1.id = "5656";
console.log(product1);


//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

const target1 = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };

const mergedObject = Object.assign({}, target1, source1);
console.log(mergedObject);

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

let student1 = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 88,
  },
};

const addSubjectGrade =(student,subject,marks)=>{
    if(!student1.grades){
         student1.grades={};
    }
    return(student1.grades[subject]=marks);
};

 addSubjectGrade (student1,"computer",92);
console.log(student1);


//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.
const areObjectsEqual = (obj1 ,obj2)=>{
    // if(obj1.length!=obj2.length){
    //     return false;
    // } wrong procedure

    let o1=Object.keys(obj1);
    let o2=Object.keys(obj2);
    if(o1.length!=o2.length){
        console.log("There keys are not same.");
        
         return false;
    }
    for(let key in obj1){
        if(obj1[key]!=obj2[key]){
            return false;
        }
    }
    return true;
};

// // Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Should return true
console.log(areObjectsEqual(objA, objC)); // Should return false


//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const arrayToObj = (arr) => {
    ///console.log(arr[2].id);
    let obj={}; 
    for(let key of arr){
        console.log(key.id,key);
        obj[key.id]=key;
    }
    
   return obj;
  };
  
  console.log(arrayToObj(inputArray));
  // Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
