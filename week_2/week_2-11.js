/* 아래 코드를 실행하고 이유 생각해보기 */

const original = [
    [18, 18, 18, 18],
    [19, 19, 19, 19],
    [20, 20, 20, 20],
    [21, 21, 21, 21],
];
const copy = original.slice();
console.log(JSON.stringify(original) === JSON.stringify(copy));
copy[0][0] = 99;
copy[2].push("02");
console.log(JSON.stringify(original) === JSON.stringify(copy));
console.log(original);
console.log(copy);

/**
 * 해당 코드의 출력 결과를 확인해 보면 copy 값을 수정하자 original의 값이 함께 수정됨
 * 이는 Array.prototype.slice() 메서드로 인해 얕은 복사가 발생
 * 결국, 두 값은 같은 메모리 값을 참조하게 되고 이로 인해 copy값을 수정할 경우 original의 값까지 수정됨
 */

/* ---------------------------------------------------------------------- */

/* 아래 코드를 실행하고 이유 생각해보기 */

const obj = { a: 1 };
const newObj = Object.assign({}, obj);
newObj.a = 2;
console.log(obj);
console.log(obj === newObj);

/**
 * 해당 코드의 출력 결과를 확인해 보면 obj의 속성과 Object.assign()을 통해 복사한 newObj의 속성이 다름
 * 이는 Object.assign()이 1차원 Object에서는 깊은 복사가 이루어지기 때문
 * 결국, obj와 newObj는 다른 메모리 주소를 참조하므로 boolean(obj === newObj)의 값이 false가 됨
 */

/* ---------------------------------------------------------------------- */

/* 아래 코드를 실행하고 이유 생각해보기 */

const obj = {
    a: 1,
    b: {
        c: 2,
    },
};
const newObj = Object.assign({}, obj);
newObj.b.c = 3;
console.log(obj);
console.log(obj.b.c === newObj.b.c);

/**
 * 해당 코드의 출력 결과는 이전 코드와 달리 obj.b.c의 속성과 Object.assign()을 통해 복사한 newObj.b.c의 속성이 같음
 * 이는 Object.assign()의 2차원 Object부터는 얕은 복사가 이행되는 특성 때문
 * 결국, 두 값은 같은 메모리 주소를 참조하기 때문에 boolean(obj === newObj)의 값이 true가 됨
 */

/* ---------------------------------------------------------------------- */

/* 아래 코드를 실행하고 이유 생각해보기 */

const obj = {
    a: 1,
    b: {
        c: 2,
    },
};
const newObj = { ...obj };
newObj.a=2;
newObj.b.c = 3;
console.log(obj);
console.log(obj.a === newObj.a);
console.log(obj.b.c === newObj.b.c);
    
/**
 * 해당 코드의 출력 결과를 보면 Obj.a와 newObj.a는 속성이 같지만, Obj.b.c와 newObj.b.c는 속성이 다름
 * 이는 Spread 연산자를 사용했기 때문으로 해당 연산자는 1차원 Object에서는 얕은 복사가, newObj.b.c는 깊은 복사가 이루어짐
 * 결국, Obj.a와 newObj.a는 같은 메모리 주소를 참조하지만 Obj.b.c와 newObj.b.c는 다른 메모리 주소를 참조함
 */

/* ---------------------------------------------------------------------- */

/* 아래 코드를 실행해보기 */

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const obj = {
    a: 1,
    b: {
        c: 2,
    },
    func: function () {
        return this.a;
    },
};

const newObj = deepCopy(obj);
newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false

/* ---------------------------------------------------------------------- */