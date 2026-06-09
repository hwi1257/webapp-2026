# JavaScript 기초 정리

## 1. JavaScript란?

JavaScript(JS)는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어이다.

- HTML : 웹 페이지의 구조 담당
- CSS : 웹 페이지의 디자인 담당
- JavaScript : 웹 페이지의 기능과 동작 담당

주요 기능
- 버튼 클릭 이벤트 처리
- 로그인 검증
- 팝업창 표시
- 실시간 데이터 갱신
- 웹 애플리케이션 개발

---

## 2. 변수(Variable)

변수는 데이터를 저장하기 위한 공간이다.

### var

```javascript
var name = "홍길동";
```

특징
- 재선언 가능
- 재할당 가능

### let

```javascript
let age = 20;
```

특징
- 재선언 불가
- 재할당 가능

### const

```javascript
const PI = 3.14;
```

특징
- 재선언 불가
- 재할당 불가

---

## 3. 데이터 타입(Data Type)

### 문자열(String)

```javascript
let name = "홍길동";
```

### 숫자(Number)

```javascript
let age = 20;
let score = 95.5;
```

### 논리형(Boolean)

```javascript
let isLogin = true;
let isAdmin = false;
```

### Null

```javascript
let data = null;
```

값이 없음을 명시적으로 나타낸다.

### Undefined

```javascript
let value;
```

값이 할당되지 않은 상태이다.

---

## 4. 연산자(Operator)

### 산술 연산자

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

### 비교 연산자

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
```

#### == 와 === 차이

```javascript
10 == "10"
```

결과

```javascript
true
```

값만 비교

```javascript
10 === "10"
```

결과

```javascript
false
```

값과 자료형까지 비교

---

## 5. 조건문(Conditional Statement)

### if문

```javascript
let age = 20;

if(age >= 19){
    console.log("성인");
}
```

### if-else문

```javascript
if(age >= 19){
    console.log("성인");
}else{
    console.log("미성년자");
}
```

### switch문

```javascript
let fruit = "apple";

switch(fruit){
    case "apple":
        console.log("사과");
        break;
    case "banana":
        console.log("바나나");
        break;
    default:
        console.log("기타");
}
```

---

## 6. 반복문(Loop)

### for문

```javascript
for(let i = 1; i <= 5; i++){
    console.log(i);
}
```

### while문

```javascript
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
```

---

## 7. 함수(Function)

함수는 특정 기능을 수행하는 코드의 집합이다.

```javascript
function add(a, b){
    return a + b;
}

console.log(add(3, 5));
```

결과

```javascript
8
```

### 화살표 함수

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

## 8. 배열(Array)

배열은 여러 개의 데이터를 저장하는 자료구조이다.

```javascript
let fruits = ["사과", "바나나", "포도"];
```

### 데이터 조회

```javascript
console.log(fruits[0]);
```

### 데이터 추가

```javascript
fruits.push("딸기");
```

### 데이터 삭제

```javascript
fruits.pop();
```

---

## 9. 객체(Object)

객체는 속성과 값을 저장하는 자료구조이다.

```javascript
let student = {
    name: "홍길동",
    age: 20,
    major: "컴퓨터공학"
};
```

### 객체 접근

```javascript
console.log(student.name);
console.log(student.age);
```

---

## 10. 이벤트(Event)

사용자의 행동에 반응하는 기능이다.

### HTML

```html
<button onclick="hello()">클릭</button>
```

### JavaScript

```javascript
function hello(){
    alert("안녕하세요");
}
```

---

## 11. DOM(Document Object Model)

HTML 요소를 JavaScript로 제어할 수 있다.

### HTML

```html
<p id="text">안녕하세요</p>
```

### JavaScript

```javascript
document.getElementById("text").innerHTML = "반갑습니다";
```

---

## 12. 템플릿 문자열

문자열 안에 변수를 쉽게 사용할 수 있다.

```javascript
let name = "홍길동";

console.log(`안녕하세요 ${name}님`);
```

---

## 13. JavaScript 특징

- 인터프리터 방식 언어
- 객체 기반 프로그래밍 언어
- 웹 브라우저에서 실행 가능
- 동적 타입 언어
- HTML, CSS와 함께 웹 개발의 핵심 기술
- Node.js를 통해 서버 개발도 가능

---

## 정리

JavaScript는 웹 페이지에 동적인 기능을 추가하기 위한 프로그래밍 언어이다.

주요 학습 내용

1. 변수(var, let, const)
2. 데이터 타입
3. 연산자
4. 조건문
5. 반복문
6. 함수
7. 배열
8. 객체
9. 이벤트
10. DOM
11. ES6 문법

JavaScript는 프론트엔드와 백엔드 모두에서 활용되는 매우 중요한 프로그래밍 언어이다.

(6월9일에 작성 감점요인)
