// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

// refactor

function Person(firstName, lastName, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteNumber = favoriteNumber;
    this.multiplyfavoriteNumber = function(n){
        return n * this.favoriteNumber
    }
}

function Parent(firstName, lastName, favoriteNumber, children){
    this.children = children;
  Person.apply(this, arguments)
  
}

let james = new Person("James", "OOP", 15)
let tom = new Person("Tom", "Jones", 5)
let karen = new Parent("Karen", "Jane", 43, ["Chris", "Tyrone"])

console.log(james.multiplyfavoriteNumber(2))
console.log(karen.children)



function Car(make, model) {
      this.make = make;
      this.model = model;
      this.numWheels = 4
}

function Motobike(make, model){
  Car.apply(this,arguments)
  this.numWheels = 2
}

let ducati = new Motobike("verona", "65")
