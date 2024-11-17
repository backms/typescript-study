/**
 * 접근 제어자
 * Access Modifier
 * -> public private protected
 */


class Employee {
    // 필드
    // public name: string;
    // protected age: number;
    // private position: string;

    // 생성자
    // 생성자 매개변수에 접근제어자를 표기해주면 필드는 자동으로 생성됨.
    constructor(public name: string, public age: number, public position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("working");
    }
}

const employee = new Employee("bms", 29, "dev");
employee.name = 'back';
employee.age = 30;
employee.position = 'designer';

// 클래스의 프로퍼티는 기본적으로 public
// private 는 클래스 내부에서만 사용가능. (파생 클래스에서 사용불가)
// protected 는 파생클래스에서는 사용 가능