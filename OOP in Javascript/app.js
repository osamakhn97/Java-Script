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

