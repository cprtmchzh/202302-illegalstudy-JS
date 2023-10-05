# 12장_함수_추가_과제
### **과제 1. CommonJS, ES6**
> CommonJS와 ES6의 차이점은 무엇인가?
>

#### CommonJS
- `export`, `module export`와 같은 키워드를 사용해 내보내고, `required`를 사용해 모듈을 불러오기도 함
- require가 동기로 이루어지므로 promise를 return 하지 않음
- 실행해보지 않으면 import, export 에러를 감지할 수 없음
- 디폴트 값으로 적용됨
- Top-level await가 불가능함

#### ES Module(ES6에 적용된 모듈)
- `named export`, `default export`와 같은 키워드를 사용해 내보내고, `import`를 사용해 모듈을 불러오기도 함
- 모듈을 비동기 환경에서 다운로드하며, import export 구문을 찾아 파싱함
- 실행해보지 않아도 import, export 에러를 감지할 수 있음
- config를 type='module'로 세팅해야 사용할 수 있음
- Top-level await가 가능함

<br>

> **Top-level await** : 기존에는 비동기 처리를 위해 사용되는 async/await가 한 세트였기에 await 단독으로 사용하는 것이 불가능했다. 그러나 ES2022부터는 모듈의 최상위 레벨에서 await를 사용할 수 있게 되었으며 이를 Top-level await라고 한다. 또한 await를 사용하는 하위 모듈이 존재하는 모듈은 다른 하위 모듈의 로드를 차단하지 않고 자신의 하위 모듈의 실행을 기다립니다.
>

### **과제 2. Callback 지옥**
> Callback 지옥을 해결할 수 있은 예방법 혹은 대처법은 무엇인가?
>

#### Promise
ES6에서 비동기 처리를 위해 도입한 또다른 패턴이다. 프로미스는 전통적인 콜백 방식과 달리 비동기 처리 시점을 명확히 표현할 수 있다는 장점이 있다. Promise는 두 가지 포인터가 존재하며 각각 **state**와 **Producer/Consumer**이다. 우선 state는 세 가지 상태를 의미하며 각각의 상태는 Promise의 처리 과정이다.

|상태|설명|
|:-----:|:-----|
|`Pending`|비동기 처리 로직이 완료되지 않은 상태|
|`Fulfilled`|비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태|
|`Rejected`|비동기 처리가 실패하거나 오류가 발생한 상태|

세 가지 상태 이외에도 Promise는 Producer/Consumer이라는 포인트가 존재한다. 이때 Producer는 원하는 기능을 수행해서 해당하는 데이터를 만들어 내며, Consumer은 만들어진 데이터를 소비한다.

|상태|설명|
|:-----:|:-----|
|`Producer`|서버와의 통신을 마쳤을 때, `resolve`라는 콜백 함수를 통해 전달|
|`Consumer`|`then`, `catch`, `finally`를 통해 값을 받아와 콜백 함수 실행|

이외에도 여러개의 프로미스를 연결하는 **Promise Chaining**, 프로미스 에러 처리를 지원하는 **Error Handling** 등 여러 기능을 지원한다.

---