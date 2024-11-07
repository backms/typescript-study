/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅


/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

animal = dog;   // 업캐스팅
// dog = animal;    // 다운캐스팅


type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "react 공부",
    price: 30000,
    skill: "reactjs"
};

book = programmingBook;     // 업캐스팅
// programmingBook = book;  // 다운캐스팅


/**
 * 초과 프로퍼티 검사
 */

// 업캐스팅이지만, book에서 정의되지 않은 skill 프로퍼티때문에 에러발생.
let book2: Book = {
    name: "react 공부",
    price: 30000,
    // skill: "reactjs"
};

// 객체단위로 정의 시 에러발생 x
let book3:Book = programmingBook;

function func(book: Book){}
func(programmingBook);
