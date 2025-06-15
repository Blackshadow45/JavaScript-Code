//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = ()=>{
    setTimeout(()=>{
        console.log("Hi my Name is Viraj");
        setTimeout(()=>{
            console.log("Hi my Name is Viraj Deshmukh");
            setTimeout(()=>{
                console.log("i live in pune");
                setTimeout(()=>{
                    console.log("Im a java full stack developer");
                    setTimeout(()=>{
                        console.log("a passionate coder");
                        setTimeout(()=>{
                            console.log("A proud indian");
                            setTimeout(()=>{
                                console.log("And i love my family");
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
        
    },1000)
}

getStudentData();