# 13장_스코프
### **과제 1. Lexical Environment**
> Lexical Environment는 뭘 뜻하는 걸까?
>

**[Execution Context](https://tc39.es/ecma262/#sec-execution-contexts)**

`Execution Context(실행 컨텍스트)`는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체로, **자바스크립트 코드가 실행되는 환경**이다. 모든 자바스크립트 코드는 컨텍스트 내부에서 실행된다.

자바스크립트에서 함수가 실행되면 실행된 함수에 해당하는 `Execution Context`가 생성되고, 자바스크립트 엔진에 있는 콜 스택에 쌓이게 된다. 이후 가장 위에 쌓여있는 컨텍스트와 관련된 코드를 실행하면서(LIFO), 전체 코드의 환경과 순서를 보장하게 된다. `Execution Context`는 식별자를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 매커니즘으로, 자바스크립트의 핵심 원리다.

**Execution Context의 생성**

자바스크립트 엔진이 스크립트를 처음 마주할 때 **전역 컨텍스트**를 생성하고, 콜 스택에 `push`한다. 이후 엔진이 스크립트를 읽어 내려가면서 함수 호출을 발견할 때마다, 함수의 실행 컨텍스트를 스택에 `push`한다. 이때 중요한 것은 `Execution Context`는 **함수가 실행될 때 생성**된다는 점이다. 참고로 `Execution Context`를 만들 수 있는 방법은 `전역 지역`, `function(함수)`, `eval()`가 있다.

**Execution Context 내부 정보**

`Execution Context`의 내부에는 `Variable Environment`, `Lexical Environment`, `this binding`이 있다.

`Variable Environment`에는 `Environment Record(현재 컨텍스트 내부의 식별자 정보)`, `Outer Environment Reference(외부 환경 정보)`가 저장된다. 이때 저장된 정보는 변하지 않는다. 

`Lexical Environment`에는 처음에는 `Variable Environment`의 정보가 복사되지만, 이후 정보가 변경될 경우 변경 사항이 실시간으로 적용된다. 즉, `Variable Environment`가 초기 상태를 기억하고 있으며, `Lexical Environment`가 최신 상태를 저장하고 있는 형태인 것이다.

**[Lexical Environment](https://262.ecma-international.org/8.0/#sec-lexical-environments)**

`Lexical Environment`는 `Execution Context`의 구성 중 하나이다. 자바스크립트에서는 실행 중인 `function(함수)`, `{...}(블록)`, `script(스크립트)`를 실행하기에 앞서 `Lexical Environment` 라는 내부 숨김 연관 객체(internal hidden associated object)를 생성한다. 이때 `Lexical Environment`는 실행할 스코프 범위 안에 있는 **변수와 함수를 프로퍼티로 저장하는 객체**를 의미하며 두 가지 환경으로 구성된다.

**Lexical Environment 환경 구성**
- `Environment Record(환경 레코드)` : 모든 지역 변수를 프로퍼티로 저장하고 있는 객체로, this와 같은 기타 정보 또한 여기에 저장
- `Outer Lexical Environment(외부 렉시컬 환경)` : 자신의 스코프를 제외한 외부 코드와 연관되어 있음

우리가 평소 사용하던 '변수'는 특수 내부 객체인 환경 `Environment Record`의 프로퍼티일 뿐이며 **변수를 가져오거나 변경하는 것**은 환경 레코드의 **프로퍼티를 가져오거나 변경**함을 의미한다.

---