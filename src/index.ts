class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name; // class의 name이 constructor의 name과 같다는 뜻.
        this.age = age;
        this.gender = gender;
    }
}

const kyungmin = new Human("Kyungmin", 29, "male");

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(kyungmin));

export {}; // TypeScript에서는 이걸 꼭 해줘야 함. 위에 내용이 모듈이 된다는 뜻이야.
