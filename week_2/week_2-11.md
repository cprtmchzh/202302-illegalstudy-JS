# 11장_얕은_복사_깊은_복사
### **과제 1. Lodash 라이브러리**
> Lodash 라이브러리 조사
>

- https://lodash.com/docs/

Lodash 라이브러리는 모듈성, 성능 및 추가 기능을 제공하는 최신 JS 유틸리티 라이브러리다. Lodash 라이브러리는 개발에서 자주 사용되는 함수들을 모아서 제공해주며, **주로 배열 안 객체들의 값을 다룰때 유용**하다. Lodash는 주로 프론트에서 사용되며, 코드의 길이를 줄여주고 빠른 작업에 도움을 준다.

#### 주로 사용되는 Lodash 메서드
|메서드|용도|
|:-----:|:-----|
|`findIndex()`|배열 내에서 원하는 index를 쉽게 획득|
|`flatten()`|다차원 배열 내의 요소를 출력|
|`remove()`|배열 내의 조건에 맞는 요소들을 제거한 후 반환|
|`find()`|조건을 만족하는 컬렉션에서의 첫번째 요소를 찾는 메서드|
|`filter()`| 특정 조건을 만족하는 모든 요소를 추출|
|`forEach()`|열의 값마다 함수를 실행시킬 때 용이하게 사용|
|`includes()`|해당 collection에 target값이 있는지 판별|

### **과제 2. cloneDeep 메서드**
> cloneDeep 메서드 조사
>

- [cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep) : Lodash에서 제공하는 깊은 복사에 대한 메서드
  
#### Example
```
var objects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(objects); // _.cloneDeep(value)
console.log(shallow[0] === objects[0]);
// => true
```

### **과제 3. JS 얕은 복사, 깊은 복사**
> 소개한 방법 이외에 JS에서 사용되는 깊은복사, 얕은복사 방법
>

#### 얕은 복사
- `for … in` 을 활용한 얕은 복사
<br>

  ```
  var copyShallo = function (obj) {
  var result = {};
  for (var prop in obj) {
    result[prop] = obj[prop];
  }
  return result;
  };
  ```


#### 깊은 복사
- 재귀 함수를 활용한 깊은 복사
<br>

  ```
  var deepCopy = function (obj) {
  var result = {};
  if (typeof obj === 'object' && obj !== null) {
    for (var prop in obj) {
      result[obj] = deepCopy(obj[prop]);
    }
  } else {
    result = obj;
  }
  return result;
  };
  ```

---