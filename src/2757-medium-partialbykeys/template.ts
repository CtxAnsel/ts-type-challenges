type PartialByKeys<T, K = keyof T> = Omit<T, K & keyof T> &
  Partial<Pick<T, K & keyof T>> extends infer U
  ? { [K in keyof U]: U[K] }
  : never;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
