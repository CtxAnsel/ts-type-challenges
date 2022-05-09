type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer front}${From}${infer last}`
  ? From extends ""
    ? S
    : `${front}${To}${ReplaceAll<last, From, To>}`
  : S;
