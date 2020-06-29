//WE use prototypes so we don't repeat ourselves all the time. It's considered refactoring.
//In Javascript when you bind a method to the this keyword, you are providing that method to only that particular instance




// inherit 1 thing from another

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Planes(make,model,year){
  return Vehicle.apply(this,arguments)
}

Planes.prototype = Object.create(Vehicle.prototype)
Planes.prototype.constructor = Planes

let jet = new Planes("Jumbo", "Jet", 2000)
let ford = new Vehicle("Ford", "Focus", 1998)



// let jen = new Person("Jennifer", "Tomato", "Green", "17")

// function Person(firstName, lastName, favoriteColor, favoriteNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteNumber = favoriteColor;
//     this.family = []
// }

// Person.prototype.fullName = function() {
//     return "my name is " + this.firstName + " " +  this.lastName
// };

// Person.prototype.addToFamily = function(person) {
//   return this.family.push(person)
// };




// function Vehicle(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.isRunning = false;
//         this.scream = function (){
//           console.log(this.make + "screamed for some reason")
//         }
       
// }

// Vehicle.prototype.turnOn = function (){
//   console.log(this.make + " is running")
//   this.isRunning = true 
// }

// Vehicle.prototype.turnOff = function () {
//   if(!this.isRunning){
//     console.log(this.make + " is already off!")
//   } else {
//     this.isRunning = false
//   }
// }

// Vehicle.prototype.beep = function (){
//   if(this.isRunning == true) {
//     console.log("BEEP BEEP!")
//   } else {
//     console.log("Tumble weed rolls by....")
//   }
// }

// let honda = new Vehicle("honda", "accura", 1999)
// let ferrari = new Vehicle ("ferrari", "red one lol", 2006)



// // function Person(firstName, lastName, favoriteNumber){
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.favoriteNumber = favoriteNumber;
// //     this.multiplyfavoriteNumber = function(n){
// //         return n * this.favoriteNumber
// //     }
// // }

// // function Parent(firstName, lastName, favoriteNumber, children){
// //     this.children = children;
// //   Person.apply(this, arguments)
  
// // }

// // let james = new Person("James", "OOP", 15)
// // let tom = new Person("Tom", "Jones", 5)
// // let karen = new Parent("Karen", "Jane", 43, ["Chris", "Tyrone"])

// // console.log(james.multiplyfavoriteNumber(2))
// // console.log(karen.children)



// // function Car(make, model) {
// //       this.make = make;
// //       this.model = model;
// //       this.numWheels = 4
// // }

// // function Motobike(make, model){
// //   Car.apply(this,arguments)
// //   this.numWheels = 2
// // }

// // let ducati = new Motobike("verona", "65")



function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false
}

Vehicle.prototype.turnOn = function (){
console.log(this.make + " is running")
return this.isRunning = true 
}

Vehicle.prototype.turnOff = function () {
if(this.isRunning == false){
console.log(this.make + " is already off!")
} else {
return this.isRunning = false
}
}

Vehicle.prototype.beep = function (){
if(this.isRunning == true) {
console.log("BEEP BEEP!")
} else {
console.log("Tumble weed rolls by....")
}
}

let honda = new Vehicle("honda", "accura", 1999)
