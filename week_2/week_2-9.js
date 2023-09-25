/* 단축 평가를 이용한 빈칸 채우기 */

var isThereMessage = true;
var message ='';

if(isThereMessage) message = '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

message = isThereMessage && '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

/* ---------------------------------------------------------------------- */

/* 아래 코드 실행해보기 */

var person = {
    firstName : 'turtle',
    last-name : 'park'
    };
console.log(person); // 에러 출력됨
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
wind.'last-name';
wind.last-name;
wind[last-name];
wind['last-name'];
wind.1;
wind.'1';
wind[1];
wind['1']

/* ---------------------------------------------------------------------- */

/* 반복문, 조건문, 단축평가를 활용한 정적 웹페이지 제작
 * ㄴ stringInputPage 폴더 참고
 */