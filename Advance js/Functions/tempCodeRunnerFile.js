const mathOperation = (a,b,operation)=>{
   return operation(a,b);
};

const add = (a,b)=>{
    return a+b;
};

const sub = (a,b)=>{
    return a-b;
}

console.log(mathOperation(9,8,add));
console.log(mathOperation(9,8,sub));