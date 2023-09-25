# 9장_타입_변환과_단축_평가
### **과제 1. 암묵적 타입 변환**
> 그렇다면 암묵적 타입 변환이 무조건적으로 좋지 않은 문화이자 기능인가?
>

암묵적 타입 변환은 용자가 값을 잘못 넘기게 될 경우 JS 엔진이 받은 값을 올바른 타입으로 변환하려 시도하려는 행위를 의미한다. 암묵적 타입 변환의 가장 큰 문제점은 타입이 자동으로 변환되기 때문에 타입을 예측할 수 없다는 점이다. 이는 오류 발생을 야기할 수 있으며 코드의 흐름에 대한 이해를 어렵게 할 수 있다. 이러한 특징은 코드가 복잡해질수록 문제가 커지게 되며 더 많은 오류를 발생시킨다. 그러나 간단한 프로젝트의 경우 코드의 흐름을 이해하는데 어려움이 없고, 결국 원시 값을 직접적으로 변경하는 것이 아니라 한 번 쓰고 버리는 형태이다. 그러므로 암묵적 타입 변환은 큰 프로젝트에서 사용하기에는 무리가 있지만 작은 프로젝트의 경우 일부 상황에 따라 사용할 수 있다고 생각한다.

---