console.log("Hello World , this is practice related to oop");

function carDetails(givenName,givenSpeed){
    this.cname = givenName;
    this.speed = givenSpeed;

    this.run = function(){

    console.log(`${this.cname} is running at ${this.speed} kmph. `)
    }
}

car = new carDetails("Honda" , 200);
car1 = new carDetails("Mehran", 240)

// car.run();

car1.run();
console.log(car1.speed);

// console.log(car)

// working with objects proto types

const proto = {
    slogan: function(){
        return "This is the nation of most misunderstood people"
    },
    changeName: function(givenName){
        this.changedName = givenName
    }

}
const haris = Object.create(proto);
haris.changedName = "Osama";
haris.age = 24;
console.log(haris);
haris.changeName("Haris Ali Khan");
console.log(haris);

// working with classes 

class Employe{

    constructor(name,age,gender){
        this.name = name;
        this.age = age,
        this.gender = gender

    }
    
    speak(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }

    static add (a,b){
        console.log(a+b);
    }
};

let Osama = new Employe("Haris",24);

Osama.speak();

Employe.add(5,6);

// Working with inheritence 

class WebDeveloper extends Employe{
    constructor(name,age,gender,department){
        super(name,age,gender);
        this.department = department;
    }

    dep(){
        console.log(`My name is ${this.name} , I am ${this.gender} , ${this.age} years old and 
        my department is ${this.department}
        
        `)
    }


    static mul(a,b){
        console.log(a*b);
    }
}

let Ali = new WebDeveloper("Ali", 25 , "Male" , "Front End ");

Ali.dep();

WebDeveloper.mul(5,4);



