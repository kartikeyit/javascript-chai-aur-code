let myDate = new Date()
//   


// let myCreatedDate = new Date(2024,0, 24)

// let myCreatedDate = new Date("2024-15-14")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(math.floor(date.now()/1000)); 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//   `${newDate.getDay()} and the time `



newDate.toLocaleString('default',{
     weekday: "long"


})