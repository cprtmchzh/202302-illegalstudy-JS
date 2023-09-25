/* 아래 코드 실행해보기 */

var person = {
    firstName : 'turtle',
    last-name : 'park'
    };
console.log(person); // 에러 출력됨 ('-'(Hyphen)이 들어있을 경우 ""(Double quotes) 필요)
//==============================================
var word1 = {
    var: '',
    function: ''
    };
console.log(word1); // { var: '', function: '' }
//==============================================
//프로퍼티 키 동적 생성
var objES5 = {}
var keyES5 = 'ES5'
objES5[keyES5] = 'world';
console.log(objES5); // { ES5: 'world' }
//==============================================
//계산된 프로퍼티 이름
var keyES6 = 'HELL';
var objES6 = {[keyES6]: 'o'};
console.log(objES6); // { HELL: 'o' }
//==============================================
var emptyObj = {
    '' : ''
    };
console.log(emptyObj); // { '': '' }
//==============================================
var numObj = {
    1 : 0,
    2 : 1,
    3 : 2
    };
console.log(numObj); // { '1': 0, '2': 1, '3': 2 }
//==============================================
var duplicateObj = {
    name : 'park',
    name : 'kim'
    };
console.log(duplicateObj); // { name: 'kim' }
//==============================================

/* ---------------------------------------------------------------------- */

/* 아래 코드 실행해보기 */

var wind = {
    'last-name' : 'park',
    1: 10
  };
  
  wind.last-name; // Error
  wind.last-name; // Error
  
  //wind[last-name]; // Error
  wind['last-name'];
  
  wind.1; // Error
  wind.'1'; // Error
  wind[1];
  wind['1']

/* ---------------------------------------------------------------------- */

/* 단축평가를 활용한 코드 */