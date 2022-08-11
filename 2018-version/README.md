# Typescript Chain  
  
Learning Typscript by making a Blockchain with it  
Lecture: [Typescript로 블록체인 만들기](https://nomadcoders.co/typescript-for-beginners)  
  
Typescript란?  
 - 자바스크립트의 superset  
 - 자바스크립트처럼 생겼고, 컴파일하면 자바스크립트로 컴파일된다.  
  
Typescript를 사용하는 이유?  
 - JS의 경우 엄격한 규칙이 없고 사용하기 쉽고, 원하는 방향으로 수정하기도 쉬운 장점이 있지만 큰 프로젝트를 하거나 팀으로 일하거나 버그를 최소화 하고 싶을때 장점이 단점이 된다. -> typescript 탄생(superset of JS)  
 - 언어가 예측가능하고, 읽기 쉬운 코드 등등 JS를 더 잘 사용할 수 있게 만듬.  
  
## Basic of Typescript  
  
강의 범위 0.3~0.7
  
```
// typescript가 object를 이해할 수 있게하고 올바른 type인지 알 수 있게 하는 것
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "World",
  age: 555,
  gender: "Female"
};

// ? : 해당 parameter가 선택적인 것으로 설정
// :(type name) => argument의 type과 return값의 type을 지정해줌
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

const sayHiTwo = (person): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi("World", 101, "male"));
console.log(sayHiTwo(person));


// interface의 경우 javascript로 컴파일 되지 않음
// 그러나 아주 가끔 javascript에 interface를 넣고 싶은 경우 class를 사용
// public vs private : class 밖에서 해당 변수를 불을 수 있으면 public, class 내부에서만 불러올 수 있으면 private
class humanClass {
  public name: string;
  public age: number;
  public gender: string;

  // 생성자 method - 클래스로부터 object를 만들 때마다 호출됨
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const personTwo = new humanClass("Hello", 333, "male");
console.log(sayHiTwo(personTwo));


// typescript 규칙 중 하나 -> 이 파일이 모듈이 된다는 것을 이해할 수 있도록
export {};
```