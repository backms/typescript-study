/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */


// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;      // 반환값의 타입이 업 캐스팅
// b = a;   // 반환값의 타입이 다운 캐스팅


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value:number) => void;
type D = (value:10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;   // 매개변수가 업캐스팅인데 오류 발생.
d = c;      // 매개변수가 다운캐스팅인데 가능함.

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;    // 매개변수가 업캐스팅이지만 오류 발생
dogFunc = animalFunc;       // 매개변수가 다운캐스팅이지만 가능


let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);  // 이부분 때문에 오류
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}



// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;      // 위 사례와 동일하게 매개변수 불일치로 오류발생.