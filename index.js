"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "hi", age = 26, gender = "male";
// ? : 해당 parameter가 선택적인 것으로 설정
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map