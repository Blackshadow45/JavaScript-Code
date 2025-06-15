//// TIMING BASED EVENTS IN JAVASCRIPT

//1.setTimeout
 function timedelayed(x){
    console.log("This function was delayed by 2000 milliseconds ",x);
    
 }

 setTimeout (timedelayed,2000);
 setTimeout (()=>timedelayed(7),2000);


 // SETTIMEINTERVAL

 function repeated(){
    console.log("This function is repeating after every 1 sconds");
    
 }

setInterval(repeated,1000);


/// question

const repeatedFunc =()=>{
    console.log("this function is repeats after every 1000 milliseconds");
    
};
const intervalid=setInterval(repeatedFunc,1000);

setTimeout(()=>{
    clearInterval(intervalid);
},5000);
