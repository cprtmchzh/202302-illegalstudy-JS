/* 1. 아래 콘솔로그의 결과값을 추론해보세요. */

var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); // 100
console.log(y); // 1

/* ---------------------------------------------------------------------- */

/* 2. 하단의 코드를 실행하고 에러가 난다면 왜 나는지 설명하시오. */

let a = 1;

{
let a = 2;
let b = 3;
}

console.log(a);
console.log(b); // b is not defined

/**
 * let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하므로 블록 지역에
 * 전역 지역에 선언된 출력문은 블록 지역에 선언된 변수 b를 인식하지 못함
 */

/* ---------------------------------------------------------------------- */

/* 3. 지금까지 했던 코드를 기반으로 let, const 키워드를 적절히 사용해서 var 키워드 대신 써보세요. */

function checkLength(text) {
    return new Promise((resolve, reject) => {
    console.log('문자열의 길이 : ' + text.length);
    resolve(text);
    })
}
  
function checkSpecialChar(text) {
    return new Promise((resolve, reject) => {
        const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+&lt;&gt;@\#$%&amp;\\\=\(\'\"]/g;
        if (reg.test(text)) {
            console.log('특수문자가 포함되어 있습니다.');
        }
        else console.log('특수문자가 포함되어 있지 않습니다.');
        resolve(text);
    })
}
  
function checkAlpabet(text) {
    return new Promise((resolve, reject) => {
        const reg = /[a-z]/;
        if (reg.test(text)) {
            console.log('소문자가 포함되어 있습니다.');
        }
        else console.log('소문자가 포함되어 있지 않습니다.');
        resolve(text);
    })
}
  
function checkAlpabet2(text) {
    return new Promise((resolve, reject) => {
        const reg = /[A-Z]/;
        if (reg.test(text)) {
            console.log('대문자가 포함되어 있습니다.');
        }
        else console.log('대문자가 포함되어 있지 않습니다.');
        resolve(text);
    })
}
  
function checkNum(text) {
    return new Promise((resolve, reject) => {
        const reg = /[0-9]/;
        if (reg.test(text)) {
            console.log('숫자가 포함되어 있습니다.');
        }
        else console.log('숫자가 포함되어 있지 않습니다.');
        resolve(text);
    })
}
  
checkLength("Seontin@1234").then(result => {
    return checkSpecialChar(result);
}).then(result => {
    return checkAlpabet(result);
}).then(result => {
    return checkAlpabet2(result);
}).then(result => {
    return checkNum(result);
})

/**
 * 필터링 변수 선언 시 let -> const 로 변경
 */

/* ---------------------------------------------------------------------- */