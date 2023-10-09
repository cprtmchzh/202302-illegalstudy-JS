/* 1. 아래 코드를 실행해 보시오. */

var x = 'globaaaaal';

function banana(){
    console.log(x);
    var x = 'loccccccccccccccccccccccal';
}

banana(); // undefined
console.log(x); // globaaaaal

/* ---------------------------------------------------------------------- */

/* 4. 전역변수 + 지역변수 관련된 해석을 본인이 직접 최소 30줄 이상의 코드를 작성해서 서술해보시오. */

let x = "outer"
let ANIMAL = {}

ANIMAL.pink = 'rabbit';
ANIMAL.brown = {
    white : 'bear'
};

function t1() {
    let x = 1;
    let y = 1;
    console.log(x); // 1
    x = 100;
}

function t2() {
    console.log(y); // Cannot access 'y' before initialization
}

function t3() {
    console.log(ANIMAL.pink); // pig
    console.log(ANIMAL.brown.white); // dog
}

ANIMAL.pink = 'pig';
ANIMAL.brown = {
    white : 'dog'
};

t1(); // 1
t2();
t3();
console.log(x); // outer
console.log(ANIMAL.pink); // pig
console.log(ANIMAL.brown.white); // dog

/* ---------------------------------------------------------------------- */