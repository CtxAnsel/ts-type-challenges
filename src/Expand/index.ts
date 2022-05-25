// 判断是否是联合类型
export type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

type TupleToUnion2<T extends any[]> = T[number];

type UnionToIntersection<T> = (
  T extends T ? (params: T) => any : never
) extends (params: infer P) => any
  ? P
  : never;
type UnionToTuple<T, Res extends any[] = []> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer ReturnType
  ? UnionToTuple<Exclude<T, ReturnType>, [...Res, ReturnType]>
  : Res;

type Expand<T> = T extends infer O ? { [P in keyof O]: O[P] } : never;
type ExpandRecursive<T> = IsUnion<T> extends true
  ? TupleToUnion2<UnionToTuple<T>>
  : T extends object
  ? T extends infer O
    ? { [P in keyof O]: O[P] extends Function ? O[P] : ExpandRecursive<O[P]> }
    : never
  : T;

// 什么情况下不显示
// 1. keyof
type obj = {
  name: string;
  age: number;
};
// name | age
type keyofTest = keyof obj;

type isUnionRes = IsUnion<keyofTest>;

type r1 = Expand<keyofTest>;

// 2. 类型别名
type CxrObject = {
  age: number;
};

type CxrUnion = boolean | number;

// 2.1 union
type unionCase = CxrObject | string;

type r2 = Expand<unionCase>;

// 2.2嵌套
type Obj1 = {
  c: CxrObject;
  //     c: CxrUnion;
  name: string;
};

type r3 = ExpandRecursive<Obj1>;

// 3. 泛型函数
type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type De = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type DeepReadonlyDraft<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Todo = DeepReadonlyDraft<De>; // should be same as `Expected`

type r4 = ExpandRecursive<Todo>;

// 联合类型
type unionType = string | number;

type obj2 = {
  a: "1";
  b: {
    c: unionType;
  };
  d: number;
};

type r5 = ExpandRecursive<obj2>;
