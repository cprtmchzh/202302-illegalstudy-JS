# 5장_표현식과_문
### **과제 1. 표현식 판별**
> 아래 코드에서 표현식인 부분과 표현식이 아닌 부분에 대해서 구분하시오.
>

<pre>
<code>var x; // 표현식 O(변수 선언)
x = 100; // 표현식 O(변수 값 할당)

var a = y = 100; // 표현식 O(변수 선언 및 값 할당)
console.log(a); // 표현식 O(값 출력)

var foo = var x; // 표현식 X(에러 발생)
</code>