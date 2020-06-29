// previously classes were made like this

function Teacher(firstName,secondName, subject){
    this.firstName = firstName;
    this.secondName = secondName;
    this.subject = subject
}

Teacher.prototype.welcome = function (){ return `Hello my name is ${this.firstName} and I will be teaching you ${this.subject}`}

Teacher.isTeacher = function (obj){ return obj.constructor === Teacher}

 

//new way with classes

class Teacher{
    constructor(firstName, secondName, subject){
        this.firstName = firstName;
        this.secondName = secondName;
        this.subject = subject;
    }
    welcome(){
        return `Hello my name is ${this.firstName} and I will be teaching you ${this.subject}`
    }
    //adding method directy on class is called a static - useful when you don't every obj created from class to have own method
    static isTeacher(obj){
        return obj.constructor === Teacher
    }

}