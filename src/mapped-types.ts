export {};

type Profile = {
  name: string;
  age: number;
};

type PartialType = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>;
