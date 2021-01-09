const sayHi = (name: string, age: number, gender?: string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`
}

console.log(sayHi("Hana", 23, "female"));

export {}; // TypeScript에서는 이걸 꼭 해줘야 함. 위에 내용이 모듈이 된다는 뜻이야.
