export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationarity: string) {
    super(name, age, nationarity);
  }

  profile(): string {
    return `name: ${this.name}, ${this.nationality}`;
  }
}

let taro = new Person("Taro", 30);

console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
