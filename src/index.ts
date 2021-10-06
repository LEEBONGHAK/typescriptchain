// ? : 해당 parameter가 선택적인 것으로 설정
// :(type name) => argument의 type과 return값의 type을 지정해줌
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("World", 101, "male"));


// typescript 규칙 중 하나 -> 이 파일이 모듈이 된다는 것을 이해할 수 있도록
export {};