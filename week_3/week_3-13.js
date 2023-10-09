/* 2. 아래 코드를 실행해 보시고 왜 저렇게 나오는지 설명하시오. */

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // 1
bar(); // 1

/**
 * JS는 Execution Context를 통해 코드 실행 순서를 관리한다. 따라서 함수 foo와 bar은 선언될 당시의
 * Lexical Environment를 참조하게 되고 함수 bar은 전역공간에 선언되었다. 따라서 함수 bar는 함수 foo 내의
 * x값이 아닌 자신이 선언될 당시의 x값인 1을 따르게 되는 것이다.
 */

/* ---------------------------------------------------------------------- */