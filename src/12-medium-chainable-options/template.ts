type Chainable = {
  option<ThisArg, K extends string, V>(
    this: ThisArg,
    key: Exclude<K, keyof ThisArg>,
    value: V
  ): ThisArg & { [k in K]: V };
  get<ThisArg>(this: ThisArg): Omit<ThisArg, "option" | "get">;
};
