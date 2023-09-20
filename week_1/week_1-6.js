/* 숫자를 모두 다 실수로 측정한다면, 2진수, 8진수, 16진수를 출력하면 어떤식으로 될까? */

var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary,octal,hex); // 65 65 65

if(binary === hex) console.log(true); // true
if(binary === octal) console.log(true); // true

/*
 * JS는 모든 숫자가 실수로 저장되므로 모두 65라는 값이 출력됨
 * 따라서, 조건문 또한 모든 숫자가 부동 소수점으로 저장되어 성립하게 됨
 */

/* ---------------------------------------------------------------------- */

/* 숫자를 모두 다 실수로 측정한다면, 아래 비교문의 결과는 어떻게 나올까? */

console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

/* 
 * 위와 마찬가지로 JS는 모든 숫자를 실수로 저장하므로 해당 결과값이 출력되는 것
 */

/* ---------------------------------------------------------------------- */

/* Infinity, -Infinity, NaN 세 가지를 console을 이용하여 도출해보세요. */

console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(NaN); // NaN

/* ---------------------------------------------------------------------- */

/* NaN이 아닌, nan, NAN 같은 값을 변수에 대입하면 어떤 식으로 나올까요? */

console.log(typeof nan); // undefined
console.log(typeof NAN); // undefined
console.log(typeof NaN); // number

/* ---------------------------------------------------------------------- */

/* “ ” 안의 ‘ ’은 뭘로 인식되고 ‘ ’ 안의 “ ”은 뭘로 인식될까요? */

var a = "이거랑'이거랑'";
var b = '꽃게랑"꽃게랑"';

console.log(typeof a); // String
console.log(typeof b); // String

/* 
 * 위의 두 사항 모두 String으로 인식함
 */

/* ---------------------------------------------------------------------- */

/* 아래의 코드는 어떤식으로 다를까요? */

console.log(`a + b = ${1 + 2}`); // a + b = 3
console.log('a + b = ${1 + 2}'); // a + b = ${1 + 2}

/* 
 * ``(template literal) : 일부 코드는 문자열로 인식하지만 표현식은 정상적으로 출력함
 * ''(single quotes) : 내부의 코드를 모두 문자열로 인식함
 */

/* ---------------------------------------------------------------------- */