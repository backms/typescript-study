/**
 * 선언 합침
 */


interface Person {
    name: string;
}

interface Person {
    name: string;   // 동일한 프로퍼티명을 선언하면 타입은 무조건 다른 인터페이스와 동일해야함.
    age: number;
}

interface Developer extends Person {
    name: "hello";
}


const person: Person = {
    name: "",
    age: 27,
};


/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",     // c가 추가되어야 할 때 c를 가진 Lib 를 생성하면 된다.
};

