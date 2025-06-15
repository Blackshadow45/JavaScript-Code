const months = ['jan','march','April','june','july'];
///add de cat an end of array
months.splice(months.length,0,"Dec");
console.log(months);

////what is th return value of an splice method
//// ans ====|> empty array
console.log(months.splice());
console.log(months);

/// update march to March
months.splice(1,1,"March");
console.log(months);

////Delete june from an array
 console.log(months.splice(3,3));
 console.log(months);
// const indexToDelete = months.indexOf("june");
// months.splice(indexToDelete,1);
// console.log(months); 
