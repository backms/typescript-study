/**
 * map 메서드
 */


function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, v => v*2);
map(["hi", "hello"], v => v.toUpperCase());



/**
 * forEach
 */

const arr2 = [1,2,3];
arr2.forEach(v => console.log(v));

function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i =0; i<arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, v => console.log(v.toFixed()));
forEach(['123', '456'], v => console.log(v));