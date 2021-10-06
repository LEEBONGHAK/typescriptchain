const name = "hi",
  age = 26,
  gender = "male";

// ? : 해당 parameter가 선택적인 것으로 설정
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

// typescript 규칙 중 하나 -> 이 파일이 모듈이 된다는 것을 이해할 수 있도록
export {};