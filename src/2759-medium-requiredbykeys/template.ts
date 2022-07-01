// your answers
type Copy<T> = Pick<T, keyof T>;
type RequiredByKeys<T extends object, K = keyof T> = Copy<
  Required<Pick<T, Extract<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>
>;

type RequiredByKeys1<T extends object, K extends keyof any = keyof T> = Copy<
  Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>
>;

interface User1 {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User1, "name">; // { name: string; age?: number; address?: string }
