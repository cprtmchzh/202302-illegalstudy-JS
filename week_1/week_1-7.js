/* 아래 코드 실행해보기 */

var a = '1';

console.log(+a, typeof +a); // 1 number
console.log(a, typeof a); // 1 string

a = true;
console.log(+a, typeof +a); // 1 number
console.log(a, typeof a); // true boolean

a = false;
console.log(+a, typeof +a); // 0 number
console.log(a, typeof a); // false boolean

a = 'Hi';
console.log(+a, typeof +a); // NaN number
console.log(a, typeof a); // Hi string

/* ---------------------------------------------------------------------- */

/* 아래의 비교가 무엇이 다른지 알아보시오. */

5 == 5; // true
5 == '5'; // true
// ================================================
5 === 5; // true
5 === '5'; // false
// ================================================
'0' == ''; // false
0 == ''; // false
0 == '0';  // true
// ================================================
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false
// ================================================
NaN === NaN // false
0 == -0 //true
0 === -0 //true

/* 
 * 1. ==(Equal Operator)은 값은 비교해 값을 도출하고, ===(Strict Equal Operator)은 값과
 * 값의 종류가 모두 같은지 비교한 후 값을 도출함
 * 2. '0'은 비어있지 않은 값, ''은 비어있는 값이므로 false가 출력됨
 * 3. 'false' 또한 마찬가지로 비어있지 않은 값이므로 true로 판단됨
 * 4. IEEE754로 인해 NaN과 0을 특별 처리
 */

/* ---------------------------------------------------------------------- */

/* 결과가 왜 다를까? */

-0 === 0; // true
Object.is(-0,0); // false

NaN === NaN; // false
Object.is(NaN,NaN); // true

/* 
 * Object.is()는 +0과 -0의 비교가 가능해지므로 ===과는 다른 결과값이 도출됨
 */

/* ---------------------------------------------------------------------- */

/* 위에 있는 반환 값(string, number, boolean, underfined, symbol, object, function)을 모두 나타내보시오. */

var name = 'cprtmchzh'
console.log(typeof name); // String

var age = 21
console.log(typeof age); // number

console.log(typeof true); // boolean

console.log(typeof nan); // undefined

var fruit = Symbol('apple');
console.log(typeof fruit); // symbol

var animal = {white : 'goat', black : 'cow'}
console.log(typeof animal); // object

function alert() {alert('Hello World!');}
console.log(typeof alert); // function

/* ---------------------------------------------------------------------- */