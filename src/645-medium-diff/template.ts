type TT<K1, K2> = K1 extends K2
  ? never
  : K2 extends K1
  ? never
  : K1;

type Diff<O extends object, O1 extends object> = {
  [K in TT<keyof (O & O1), keyof (O | O1)>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
    ? O1[K]
    : never;
};
