//Promise를 이용한 콜백 탈출

function checkLength(text) {
  return new Promise((resolve, reject) => {
    console.log('문자열의 길이 : ' + text.length);
    resolve(text);
  })
}

function checkSpecialChar(text) {
  return new Promise((resolve, reject) => {
    let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+&lt;&gt;@\#$%&amp;\\\=\(\'\"]/g;
    if (reg.test(text)) {
      console.log('특수문자가 포함되어 있습니다.');
    }
    else console.log('특수문자가 포함되어 있지 않습니다.');
    resolve(text);
  })
}

function checkAlpabet(text) {
  return new Promise((resolve, reject) => {
    let reg = /[a-z]/;
    if (reg.test(text)) {
      console.log('소문자가 포함되어 있습니다.');
    }
    else console.log('소문자가 포함되어 있지 않습니다.');
    resolve(text);
  })
}

function checkAlpabet2(text) {
  return new Promise((resolve, reject) => {
    let reg = /[A-Z]/;
    if (reg.test(text)) {
      console.log('대문자가 포함되어 있습니다.');
    }
    else console.log('대문자가 포함되어 있지 않습니다.');
    resolve(text);
  })
}

function checkNum(text) {
  return new Promise((resolve, reject) => {
    let reg = /[0-9]/;
    if (reg.test(text)) {
      console.log('숫자가 포함되어 있습니다.');
    }
    else console.log('숫자가 포함되어 있지 않습니다.');
    resolve(text);
  })
}

checkLength("Seontin@1234").then(result => {
  return checkSpecialChar(result);
}).then(result => {
  return checkAlpabet(result);
}).then(result => {
  return checkAlpabet2(result);
}).then(result => {
  return checkNum(result);
})