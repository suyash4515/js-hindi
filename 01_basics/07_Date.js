let mydate = new Date() /*
console.log(mydate.toString()); // Thu Nov 09 2023 15:20:16 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());  //Thu Nov 09 2023
console.log(mydate.toISOString()); //2023-11-09T15:20:16.656Z
console.log(mydate.toLocaleDateString()); // 11/9/2023
*/
console.log(typeof mydate)

//let mycreateddate = new Date(2023 , 1 , 23 , 2 , 3)
//let mycreateddate = new Date("2023-01-14")
let mycreateddate = new Date("01-14-2023")
//console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate.getMonth() + 1);


NewDate.toLocaleString('default' , {
    weekday:"long",
    
})