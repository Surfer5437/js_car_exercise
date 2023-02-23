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
class Car extends Vehicle{
    constructor(make, model, year){
        
        super(make,model,year);
        if (this.make===undefined || this.model === undefined || this.year === undefined){
            throw new Error('Only vehicles are allowed here!')
        }
        this.numWheels = 4;
    }
}
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make,model,year);
        if (this.make===undefined || this.model === undefined || this.year === undefined){
            throw new Error('Only vehicles are allowed here!')
        }
        this.numWheels = 2;
    }
}
class Garage{
    constructor(vehCap){
        this.vehCap = vehCap;
        this.vehicles = [];
    }
    add(c){
        if (!(c instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length !== this.vehCap){
        this.vehicles.push(c);
        return "Vehicle added!";
        }
        else{
            return "Sorry, we're full.";
        }
    }
}