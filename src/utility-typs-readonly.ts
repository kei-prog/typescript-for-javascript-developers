export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Ham",
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const frinend: PersonalDataType = {
  name: "John",
  age: 30,
};

// friend.age++;
//
type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
