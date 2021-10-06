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

// typescript 규칙 중 하나 -> 이 파일이 모듈이 된다는 것을 이해할 수 있도록
export {};