// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};


let user: User= {
    id : 1,
    name : "백민수",
    nickname: "bms",
    birth: "1991.04.24",
    bio: "안녕하세요",
    location: "서울시",
}

let user2: User= {
    id : 2,
    name : "백민수2",
    nickname: "bms2",
    birth: "1991.04.24",
    bio: "안녕하세요",
    location: "서울시",
}


// 인덱스 시그니쳐
type CountryCodes = {
    [Key : string] : string;    // key - value 타입
};


let countryCodes: CountryCodes = {
    Korea : 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
    [Key : string] : number;    // 객체에 프로퍼티가 없어도 오류 발생x
    Korea : number;             // 직접 명시할경우, 객체에 해당 프로퍼티가 있어야함.
    // UnitedState : string;    // 인덱스 시그니쳐로 명시한 타입과 일치 해야함.
};

let countryNumberCodes: CountryNumberCodes = {
    Korea : 410,
    UnitedState : 840,
    UnitedKingdom : 826,
}
