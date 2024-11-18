/**
 * 제네릭
 */

function func<T>(value: T): T{
    return value;
}

let num = func(10);

let str = func("string");

let bool = func(true);

let arr = func<[number, number, number]>([1,2,3]);  // 튜플타입으로 명시.