/// current time and date
const currentDate = new Date();
console.log(currentDate);

///based on the provided string
const dateString ="2025-04-16T14:43:52.051Z"; 
const newDate=new Date(dateString);
console.log(newDate);

////new Date(year,month)
const Date1=new Date(2025,2);
console.log(Date1);

////new Date(year,month,Day)
const date2=new Date(2025,1,12);
console.log(date2);

///new Date(year,month,day,hours)
const date3=new Date(2025,0,15,5);
console.log(date3);

///new Date(year,month,day,hours,minutes)
const date4=new Date (2025,0,15,5,55);
console.log(date4);

///new Date(year,month,day,hours,minutes,seconds)
const date5=new Date (2025,0,15,5,55,45);
console.log(date5);

///new Date(year,month,day,hours,minutes,seconds,ms)
const date6=new Date (2025,0,15,5,55,45,274);
console.log(date6);

///new Date(milliseconds)
const date7= new Date()


//// javascript Get Date Method / Getting Components
const curDate = new Date();
const year = curDate.getFullYear();
const month = curDate.getMonth();
const date = curDate.getDate();
const day = curDate.getDay();
console.log(curDate);
console.log(year);
console.log(month);
console.log(date);
console.log(day);

/// js set date methods / setting components 
const date= new Date();
console.log(date);
date.setFullYear(2025);
console.log(date);

//// set month
const date = new Date();
date.setMonth(5);
console.log(date);
/// js set date
const date = new Date();
date.setDate(20);
console.log(date);

///js get time methods 

const curTime = new Date();

const hours=curTime.getHours();
const minutes=curTime.getMinutes();
const seconds=curTime.getSeconds();
const time= curTime.getTime();
console.log(hours);
console.log(time);

/// set milliseconds
const date = new Date();
date.setMilliseconds=(677);
console.log(date);

//// set time'
const date = new Date();    ////ondoan standard time
date.setTime(323131353113);
console.log(date);

/// few mwthods of date objects in js 
/// toLocalString
const date = new Date();
const localString = date.toLocaleString();
console.log(localString);

///toLocalDateString():
const date = new Date();
const localDateString = date.toLocaleDateString();
console.log(localDateString);

///for Time
const date=new Date();
const localeTimeString = date.toLocaleTimeString();
console.log(localeTimeString);

///bonus methods
console.log(Date.now());





 










