class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
    honk(){
        console.log("Beep.");
    }
}