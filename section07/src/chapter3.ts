/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {   // 타입변수 = 타입 파라미터 = 제네릭 타입변수
    key: K;
    value: V;
}

let keyPari: KeyPair<string, number> = {
    key: "key",
    value: 0
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};



/**
 * 인덱스 시그니쳐
 */

// 인덱스 시그니쳐 예시
interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: 123123,
};

interface Map<V> {
    [key: string]: V;
}

let sringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};



/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: "hello",
};



/**
 * 제네릭 인터페이스의 활용 예시
 * => 유저 관리 프로그램
 * => 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    if(user.profile.type !== "student") {
        console.log("잘 못 오셨씁니다.");
        return;
    }

    const school = user.profile;
    console.log(`${school}로 등교완료`);
}

const developerUser: User<Developer> = {
    name: "bms",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};

const studentUser: User<Student> = {
    name: "back",
    profile: {
        type: "student",
        school: "highSchool",
    }
}