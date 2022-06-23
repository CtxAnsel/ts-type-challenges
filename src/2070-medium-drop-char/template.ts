type DropChar<
  S extends string,
  C extends string,
  Res extends string = ""
> = S extends `${infer F}${infer L}`
  ? F extends C
    ? DropChar<L, C, `${Res}`>
    : DropChar<L, C, `${Res}${F}`>
  : Res;

type DropChar2<
  S extends string,
  C extends string
> = S extends `${infer F}${infer L}`
  ? F extends C
    ? `${DropChar2<L, C>}`
    : `${F}${DropChar2<L, C>}`
  : S;

type demo = DropChar2<"a b c", "b">;
