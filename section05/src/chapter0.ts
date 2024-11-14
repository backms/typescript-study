/**
 * 인터페이스
 */

interface Person {
    readonly name: string;      // readonly 가능
    age?: number;
    sayHi(): void;      // 프로퍼티에 함수 사용가능
    sayHi(a:number, b:number):void;
};

// 타입별칭과 다르게 유니온, 인터섹터 불가 -> 대신 끼워쓰기 가능
type Type1 = number | string | Person;
type Type2 = number & string;


const person : Person = {
    name: "bms",
    age: 28,
    sayHi: function () {
        console.log("HI");
    }
};


person.sayHi();
person.sayHi(1,2);