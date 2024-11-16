/**
 * 타입스크립트의 클래스
 */


const employee = {
    name: "bms",
    age: 28,
    position: "dev",
    work() {
        console.log("working");
    },
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("working");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name:string, age: number, postion: string, officeNumber: number) {
        super(name, age,postion);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("back", 29, "developer");
console.log(employeeB);

const employeeC: Employee = {
    name: "ddd",
    age: 30,
    position: "dev",
    work() {}
};