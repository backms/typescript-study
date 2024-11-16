/**
 * 클래스
 */


let studentA = {
    name: "bms",
    grade: "A+",
    age: 20,
    study() {
        console.log("study");
    },
    introduce() {
        console.log("hello");
    },
}

let studentB = {
    name: "paa",
    grade: "B-",
    age: 21,
    study() {
        console.log("study2");
    },
    introduce() {
        console.log("hello2");
    },
}



// 클래스 선언 - 클래스명은 파스칼 표기법 사용
class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("study");
    }

    introduce() {
        console.log("introduce");
        console.log(`안녕하세요. ${name}입니다.`);
    }
}


class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}


// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentC = new Student("back", "A-", 29);
studentC.study();
studentC.introduce();


const studentDeveloper = new StudentDeveloper("백", "B+", 28, "TypeScript");
studentDeveloper.programming();