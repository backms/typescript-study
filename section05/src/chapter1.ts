/**
 * 인터페이스 확장
 */

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {  // extends 로 상위 인터페이스의 프로퍼티를 사용할 수 있음.
    // name: "hello";  // 상위 인터페이스에서 정의한 프로퍼티의 하위 타입으로 재정의 가능.
    name: string;
    isBark: boolean;
}

const dog: Dog = {
    // name: "hello",  // string 리터럴 타입으로 재정의 가능.
    name: "",
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    ifFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat : DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}