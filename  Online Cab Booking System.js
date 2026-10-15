class Vehicle {
    constructor(vehicleNo, vehicleName, distance) {
        this.vehicleNo = vehicleNo;
        this.vehicleName = vehicleName;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static displayPlatform() {
        console.log("Booking Platform: QuickRide");
    }
}

class Car extends Vehicle {
    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    calculateFare() {
        return this.distance * 8;
    }
}

const car = new Car("b122", "car", 50);
const bike = new Bike("b642", "bike", 20);

Vehicle.displayPlatform();
console.log("Car Fare:", car.calculateFare());
console.log("Bike Fare:", bike.calculateFare());
