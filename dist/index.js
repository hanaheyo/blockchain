"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name; // class의 name이 constructor의 name과 같다는 뜻.
        this.age = age;
        this.gender = gender;
    }
}
const kyungmin = new Human("Kyungmin", 29, "male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(kyungmin));
//# sourceMappingURL=index.js.map