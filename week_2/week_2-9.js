/* 단축 평가를 이용한 빈칸 채우기 */

var isThereMessage = true;
var message ='';

if(isThereMessage) message = '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

message = isThereMessage && '멘토는 죽어있다.';
console.log(message); // 멘토는 죽어있다.

/* ---------------------------------------------------------------------- */

/* 단축 평가를 활용한 코드 */

function numInput(num_1) {
    var check = num_1 || 0;
    console.log(check);
}

function numCheck(num_2) {
    var check_2 = !isNaN(num_2) || "It's not a Number";
    if (check_2) check_2 = "Success";
    console.log(check_2);
}
    
    numInput(123); // 값을 넣지 않아도 기본적으로 0 할당
    numCheck(123123); // 숫자인지 아닌지 판별

/* ---------------------------------------------------------------------- */

/* 반복문과 조건문을 활용한 코드 */

function signUp(pw) {
    let count = 0;
    let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+&lt;&gt;@\#$%&amp;\\\=\(\'\"]/g;
    let reg2 = /[a-zA-Z]/; //영어
    let message;

    if (pw.length < 12) {
        console.log('패스워드가 너무 짧습니다.');
        count++;
    }

    if (!reg.test(pw)) {
        console.log('특수문자가 포함되어 있지 않습니다.');
        count++;
    }

    if (!reg2.test(pw)) {
        console.log('영어가 포함되어 있지 않습니다.');
        count++;
    }

    if (count == 0) console.log('회원가입에 성공했습니다.');
    else console.log('발견된 문제점 : ' + count);
}

function signIn(id, pw) {
    checkid = ['guest', 'admin', 'asdf'];
    checkpw = ['guest', 'admin', 'asdf'];

    for (let i = 0; i <= 3; i++) {
        if (id == checkid[i] && pw ==checkpw[i]) {
            console.log('로그인에 성공하였습니다.');
            break;
        }
        if (i == 3) console.log('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
}

signUp('54517863');
signIn('guest', 'guet');

/* ---------------------------------------------------------------------- */