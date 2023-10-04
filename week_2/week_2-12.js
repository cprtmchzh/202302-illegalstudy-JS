/* 1. 아래의 빈칸과 서로 차이점을 서술하시오. */

function add(x, y) { // x,y 을 뭐라하는가 : 인자
    return x + y;
}
add(2,5); // 들어가는 값에 대한 단어 : 인수

/* ---------------------------------------------------------------------- */

/* 3. 함수 이름을 생략하면 나오는 에러는 어떤건지 확인해보세요. */

function (x, y) {
    return x + y;
} // SyntaxError: Function statements require a function name
    
/* ---------------------------------------------------------------------- */

/* 5. 다음 코드에 에러가 나는 이유가 무엇인가? */

var add1 = ( function() {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1,2)); // 13

var add2 = ( function() {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;')
}());

console.log(add2(1,2)); // ReferenceError: a is not defined

/**
 * Function 생성자 함수로 인해 생성된 객체 내에서는 변수 a가 정의되지 않았기 때문
 */

/* ---------------------------------------------------------------------- */

/* 6. 아래 함수를 실행해보고 결과 값을 적으시오. */

function add(x, y){
    console.log(x, y);
    return x + y;
}

add(2, 5);

console.log(x, y); // ReferenceError: x is not defined

//-----------------------------------------------

function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN

//-----------------------------------------------

function add(x, y) {
    console.log(arguments);
    return x + y;
}

console.log(add(2, 5, 10)); // [Arguments] { '0': 2, '1': 5, '2': 10 } 7

/* ---------------------------------------------------------------------- */

/* 8. 재귀함수로 팩토리얼을 구현하고, 해당 코드에 대한 리뷰를 해보세요. */

function factorial(num) {
    if (num > 1) return num * factorial(num - 1);
    else return num;
}

console.log(factorial(10));

/**
 * factorial 함수에 대입한 값이 1을 초과 할 경우 자신을 재참조해 계산을 계속해서 반복, 
 * 그러다 결국 값이 1과 같거나 작아지게 되면 현재 값을 반환함. if문에서 비교 값이 1인 이유는
 * 값이 1과 같거나 작아질 경우 재참조하는 값이 0이 되기 때문
 */

/* ---------------------------------------------------------------------- */

/* 9. callback 지옥을 만들어 보고 calllback 지옥이 왜 위험한지 서술하시오.*/



/* ---------------------------------------------------------------------- */

/* 10. 아래의 코드 중 어떤 것이 순수 함수이며 어떤 것이 비순수 함수인지 서술하시오. */

var count = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count); // 비순수 함수

//-----------------------------------------------

var count = 0;

function increase() {
    return ++count;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count); // 순수 함수

/**
 * 첫 번째 코드에서는 함수 내 n이라는 변수가 변수 count로 인해 변경되었기 때문에 비순수 함수임
 * 두 번째 코드에서는 count라는 변수가 어떠한 외부의 상태에 영향을 받지 않으므로 순수 함수임
 */

/* ---------------------------------------------------------------------- */