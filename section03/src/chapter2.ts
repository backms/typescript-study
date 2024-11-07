/**
 * Unknown 타입
 */

function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar : unknown;

    // 아래 다운캐스팅 사례는 에러발생.
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


/**
 * Never 타입
 * 집합으로 따지면 공집합
 */

function neverExam() {
    function neverFunc(): never {
        while(true){}
    }

    // never는 최하위 계층이라 모든 타입에 업캐스팅 가능
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 아무것도 허용안됨.
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;

}


/**
 *  Void 타입
 */

function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;   // undefined 타입은 void 타입의 하위계층이라 업캐스팅 가능
    }

    let voidVar: void = undefined;
}


/**
 * Any 타입
 * 모든타입의 슈퍼타입, 타입계층도를 무시함.
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;    // unknown 타입의 다운캐스팅인데 가능함.
    undefinedVar = anyVar;  // any 타입의 다운캐스팅인데 가능함.

    // neverVar = anyVar;  // never 타입에는 다운캐스팅 불가.

}