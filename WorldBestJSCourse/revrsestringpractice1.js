////reverse a string use word i am in kashmir. 

// function reversewrd(wrd){
//     let reverse="";
//     for(let char=wrd.length-1; char>=0;char--){
//      reverse+=wrd[char];
//     }
//     return reverse;
// }
// console.log(reversewrd("i am in kashmir"));

// let revWrd=(str)=>str.split("").reverse().join("");
// console.log(revWrd("i am in kashmir"));

///check wether given word is pallindrome or not
function isPalindrome(Wrd){
    let result="";
    for(let char=Wrd.length-1;char>=0;char--){
        ///result+=Wrd[char];
        result=result+Wrd[char];
    }
    if(result.toLowerCase() === Wrd.toLowercase()){
        console.log("The given Word is pallindrome")
    }
    else{
        console.log("The given word is not pallindrome");
    }
}  
console.log(isPalindrome("viraj"));
console.log(isPalindrome("level"));
 

////////////////////////
//reverse string 
let revwrd=(str)=>str.split("").reverse().join("");
console.log(revwrd("Raj").toLowerCase(revwrd));

// without using built in functions
function rev(revwrd){
    let reverse=" ";
    for(let char=revwrd.length;char>=0;char--){
        reverse=reverse+revwrd[char];
    }
    return reverse;
}
console.log(rev("Viraj").toLowerCase(rev));

////check whether palindrome or not
function isPalindrome(word){
    let result= "";
    for(let char=word.length-1;char>=0;char--){
        result = result+word[char];

    }
    if ( result.toLowerCase() === word.toLowerCase()){
        console.log("given word is palindrome");
    }
    else{
        console.log("given word is not palindrome");
    }
}
isPalindrome("Viraj");
isPalindrome("Level");

function isPalindrome(word) {
    let result = "";
    for (let char = word.length - 1; char >= 0; char--) {
        result = result + word[char];
    }
    if (result.toLowerCase() === word.toLowerCase()) {
        console.log("given word is palindrome");
    } else {
        console.log("given word is not palindrome");
    }
}

// Test cases
isPalindrome("Viraj");
isPalindrome("Level");


 
