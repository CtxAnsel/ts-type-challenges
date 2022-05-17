type Flatten<T extends any[]> = T extends []
  ? []
  : T extends [infer First, ...infer Last]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Last>]
    : [First, ...Flatten<Last>]
  : [];
