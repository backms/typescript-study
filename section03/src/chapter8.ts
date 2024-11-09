/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
    tag: "ADMIN";   // tag 가 없는 경우에 세 타입은 모두 교집합 가능 but tag 프러퍼티가 생기는 경우 스트링 리터럴 타입으로 모두 서로소 관계가 됨.
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point} 모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user:User){

    // 타입의 특정 프로퍼티로 조건문 만들었을 경우 -> 코드를 이해하기 쉽지 않음.
    if('kickCount' in user){}
    else if('point' in user){}

    // 서로소 타입으로 조건문을 만들었을 경우
    if(user.tag === 'ADMIN'){
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if(user.tag === 'MEMBER'){
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount} 모았습니다.`);
    }

    // 이렇게 할 수 도있음.
    // switch (user.tag){
    //     case "ADMIN":
    //         break;
    //     case "MEMBER":
    //         break;
    //     case "GUEST":
    //         break;
    // }
}


/**
 * 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    }
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

// 로딩중 => 콘솔에 로딩중 출력
// 실패 => 실패 : 에러메세지 출력
// 성공 => 성공 : 데이터 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            // console.log(`에러 발생 : ${task.error?.message}`);   // AsyncTask 하나로 사용할 때는 error? 를 사용해야 했음.
            console.log(`에러 발생 : ${task.error.message}`);       // task를 분리하여 서로소 타입으로 사용 시 error 에 ? 붙이지 않아도 됨.
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response?.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
}