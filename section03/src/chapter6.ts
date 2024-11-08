/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;  // as 타입으로 단언되도록 선언.
person.name = "백민수";
person.age = 20;


type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;           // as Dog 를 붙이지 않으면 breed 때문에 오류 발생.



/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언 식
 * A as B
 * A가 B의 슈퍼타입이거나, A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;     // 10(number) 는 never 의 슈퍼타입
let num2 = 10 as unknown;   // 10(number) 는 unknown 의 서브타입

let num3 = 10 as unknown as string; // 이런 방법도 있다..



/**
 * const 단언
 */

let num4 = 10 as const; // const 로 선언한 것과 같은 결과

let cat = {
    name: "야옹이",
    color: "yellow",
} as const; // 객체의 프러퍼티가 readonly 로 고정됨.



/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "bms",
};

const len : number = post.author!.length;   // author! 는 null 또는 undefined 이 아니라고 명시함.

