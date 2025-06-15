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