/**
 * 함수타입 표현
 */

type Operation = (a: number, b: number) => number;

// 타입을 맥여주면 매개변수와 함수에 타입을 입력하지 않아도 된다.
const add0: (a: number, b: number) => number = (a, b) => a + b;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;


/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
    (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;