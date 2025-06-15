//* Synchronous code executes line by line, blocking further execution until 
// each line is completed, while asynchronous code allows other 
// code to continue executing while it waits for an asynchronous operation to complete.



const func2=()=>{
    console.log("Function 2 start");
};


const func1=()=>{
   console.log("Function 1 started");
   func2();
   console.log("Function 1 ends");
   
};
func1();


//////Asyncronous 

const func4=()=>{
    setTimeout(()=>{
        console.log("Function 4 starts and ends ");
        
    },2000);

};

const func3=()=>{
    console.log("function 3 started ");
    func4();
    console.log("Function 3 ends ")
    
};
func3();