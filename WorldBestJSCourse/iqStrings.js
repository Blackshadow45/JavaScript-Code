//question:write a pro to all alphabets froma to z
console.log("a".charCodeAt(0));
for(let char=97;char<=122;char++){ 
    //console.log(String.fromCharCode(char));
    console.log(String.fromCharCode(char));
}


///question 2: WAP to count vowels present in a string
const check =(str)=>{
  let count=0;
  let vowels='aeiou';
  for(let char of vowels){
    if(str.includes(char)){
      count++;
    }
  }
  return count;
};
console.log(check("Fox in the jungle.  "));


 ///question 3 : 

//  let str= "Fox in the jungle";
//  console.log(str.includes("a")); 
let str= "Fox in the jungle";
const check=(str)=>{
  const vowels='aeiou';

  for(let char of vowels){
    //console.log(str.includes(char));
    if(! str.includes(char)){
      return false;
    }
  }
  return true;
};
console.log(check("Fox in the jungle"));