export class Employee {
    private name: string;
    private department: string;
    private salary: number;
    private subordinates: Employee[];

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.subordinates = [];
    }

    add(e: Employee): void {
        this.subordinates.push(e);
    }

    remove(e: Employee): void {
        this.subordinates.splice(this.subordinates.indexOf(e), 1);
    }

    getSubordinates(): Employee[] {
        return this.subordinates;
    }

    toString(): string {
        return (`Employee :[ Name : ${ this.name}, Department : ${this.department}, Salary : ${this.salary} ]`);
    }
}