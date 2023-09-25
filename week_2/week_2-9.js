/* 단축 평가를 이용한 빈칸 채우기 */

var isThereMessage = true;
var message ='';

if(isThereMessage) message = '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

message = isThereMessage && '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

/* ---------------------------------------------------------------------- */