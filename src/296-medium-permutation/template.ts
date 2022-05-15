type Permutation<T, T1 = T> = [T] extends [never]
  ? []
  : T extends T1
  ? [T, ...Permutation<Exclude<T1, T>>]
  : [];
