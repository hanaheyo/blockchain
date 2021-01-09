const name = "Hana",
    age = 24,
    gender = 'female';

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

sayHi(name, age);

export {}; // TypeScript에서는 이걸 꼭 해줘야 함. 위에 내용이 모듈이 된다는 뜻이야.
