//// Strings

//length property

let str="Viraj Sharad Deshmukh";
console.log(str.length);

///Escape character
let word="I'm A Java Full Stack Developer \"A Passionate\" And a He\\\she... ";
console.log(word);


///String Search Method

//Indexof()
let sen="Hey.. I'm a certified Java Developer.....";
const res=sen.indexOf("a");
console.log(res);

let strmap=Array.from(sen);
console.log(strmap);
const res2=strmap.map((curele,index,arr)=>{
    return `${curele}-${index}`;
});
console.log(res2);

///Array.from()
let name="Viraj Deshmukh";
let strArr=Array.from(name);
console.log(strArr);

///lastindexof()
let str="Jyoti Sharad Deshmukh";
console.log(str.lastIndexOf("Deshmukh"));

const strmap=Array.from(str);
console.log(strmap);
const res=strmap.map((curele,index)=>{
    return `${curele} - ${index}`;
});
console.log(res);


////Search()
let name ="Worlds Best Java Developer.........";
console.log(name.search(/best/i));
console.log(name.search("best"));

//match()
let name="Viraj Sharad Deshmukh viraj";
const res=name.match("Viraj");
console.log(res);
console.log(name.match(/viraj/gi));

///matchall()
let name = "Viraj sharad Deshmukh Atit Maharashtra";
const str=name.matchAll(/Viraj/ig);
console.log(str);

//includes
let name="Deshmukh viraj sharad";
console.log(name.includes("viraj"));
console.log(name.startsWith("viraj"));
console.log(name.endsWith("sharad"));
const res=name.slice(6);
console.log(res);
const res1=name.slice(4,9);
console.log(res1);