/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */


/**
 * 1. 합집함 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];


type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

// Dog 타입의 프러퍼티를 갖음
let union1: Union1 = {
    name: "",
    color: "",
};

// Person 타입의 프러퍼티를 갖음
let union2: Union1 = {
    name: "",
    language: "",
};

// Person 타입과 Dog 타입의 교집합
// let union3: Union1 = {
//     name: "",
//     color: "",
//     language: "",
// };

// 어느 타입에 속하지 않은 상태라 오류 발생.
// let union4: Union1 = {
//     name: "",
// };


/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;  // number & string 의 교집합은 never 타입이 됨.


type Intersection = Dog | Person;

// let intersection1 : Intersection = {
//     name: "",
//     color: "",
//     language: "",
// }