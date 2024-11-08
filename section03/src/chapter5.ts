/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id : 1,
    name: "백민수",
    profile : {
        nickname : "bms"
    },
    url: "www.test.com",
};

let {id, name, profile} = c;

let [ one, two, three ] = [ 1,"hello", true];

function func(message = "hello") {
    return "hello";
};



let d;  // 암묵적 any 타입  *명시적인 any 타입과는 다름.
d = 10; // d 는 number 타입으로 변경.
d.toFixed();

d = "hello";    // d 는 string 타입으로 변경.
d.toUpperCase();

const num = 10; // number 리터럴 타입 why? const 자체가 상수 타입이기 때문.

