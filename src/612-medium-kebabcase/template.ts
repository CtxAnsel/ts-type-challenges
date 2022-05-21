type KebabCase<
  S extends string,
  F extends string = ""
> = S extends `${infer L}${infer Rest}`
  ? L extends Lowercase<L>
    ? `${KebabCase<Rest, `${F}${L}`>}`
    : F extends ""
    ? KebabCase<Rest, `${F}${Lowercase<L>}`>
    : KebabCase<Rest, `${F}-${Lowercase<L>}`>
  : F;
