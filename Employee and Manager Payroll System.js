class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

let employee1 = new Employee(101, "Himank", 300000);
let manager1 = new Manager(102, "Rahul", 50000, 10000);

console.log("Employee Name:", employee1.name);
console.log("Employee Salary:", employee1.calculateSalary());

console.log("----------------");

console.log("Manager Name:", manager1.name);
console.log("Manager Salary:", manager1.calculateSalary());