// object
let user: { // 객체 리터럴 타입 -> 구조적 타입 시스템
    id?: number; // 선택적 프로퍼티
    name: string;
} = {
    id: 1,
    name: "백민수",
};


let config: {
    readonly apiKey: string;    // 읽기전용 프로퍼티
} = {
    apiKey : "MY API KEY",
};
