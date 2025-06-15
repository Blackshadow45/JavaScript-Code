 /// variables
  var one ="I am viraj";
  function test(){
    console.log(one);
  };
  test();
  console.log(one);
  ///global scope

  
  function two(){
    let a=10;
    console.log(a);
  }
  two();
  console.log(a);
  /// Function Scope (var is limited to functions)

  if (true){
    let blockele=10;
    const blockelem=15;
    console.log(blockele);
    console.log(blockelem);
  }
  console.log(blockele);
    console.log(blockelem);
///Block Scope (let and const are limited to blocks)

var x=10;
var x =12;


let y =12;
//let y =15;//error cant redeclare

const z=8;
// const z = 4; //error

console.log(x); 
console.log(y); 
console.log(z);
///Re-declaration (var allows it, let and const don’t)

let a = 100;
a = 200;  //  Allowed

const b = 300;
// b = 400; //  Error (Assignment to constant variable)

console.log(a); 
console.log(b); 
///Reassignment (const can’t be reassigned)

