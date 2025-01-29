export {};

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const example1 = {
  name: "Ham",
  age: 43,
};

type Profile = {
  name: "Ham";
  age: 43;
};

const example2: Profile = {
  name: "Ham",
  age: 43,
};

type Profile2 = typeof example1;
