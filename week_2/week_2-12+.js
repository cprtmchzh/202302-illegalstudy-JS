/* 3. function을 사용해 120줄 이상의 코드 작성 */

//재귀 함수를 통한 배열의 합 구하기

function arr(sum) {
    if(sum.length == 1) {
      return sum[0];
    }
    return arr(sum.slice(0, -1)) + sum[sum.length - 1];
  }
  console.log(arr([4, 12, 13, 34, 56]))

  //-------------------------------------------
  
  //Promise를 이용한 콜백 탈출
  
  function add(x) {
    return new Promise((resolve, reject) => {
        let sum = x + x;
        console.log(sum);
        resolve(sum);
    })
  }
  
  function sub(x) {
    return new Promise((resolve, reject) => {
        let sum = x - (x / 2);
        console.log(sum);
        resolve(sum);
    })
  }
  
  function mul(x) {
    return new Promise((resolve, reject) => {
        let sum = x * x;
        console.log(sum);
        resolve(sum);
    })
  }
  
  function div(x) {
    return new Promise((resolve, reject) => {
        let sum = x / 2;
        console.log(sum);
        resolve(sum);
    })
  }
  
  add(3).then(result => {
    return mul(result);
  }).then(result => {
    return sub(result);
  }).then(result => {
    return mul(result);
  }).then(result => {
    return add(result);
  }).then(result => {
    return div(result);
  }).then(result => {
    return sub(result);
  }).then(result => {
    console.log('계산이 완료되었습니다.');
  })
  
  //-------------------------------------------
  
  //특수문자, 소문자, 대문자, 숫자 사용 판별 함수

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