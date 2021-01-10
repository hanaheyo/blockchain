interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "Hana",
    age: 22,
    gender: "female"
}

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(person));

export {}; // TypeScript에서는 이걸 꼭 해줘야 함. 위에 내용이 모듈이 된다는 뜻이야.
