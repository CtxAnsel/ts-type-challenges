type Naive<
  N extends string,
  Base extends any[] = [[]],
  M extends any[] = []
> = `${M["length"]}` extends N ? [] : [...Base, ...Naive<N, Base, [[], ...M]>];

type Rec<S, Res extends any[] = []> = S extends `${infer L}${infer R}`
  ? Rec<R, [...Naive<"10", Res>, ...Naive<L>]>
  : Res;

type MinusOne<T extends number> = Rec<`${T}`> extends [infer L, ...infer R]
  ? R["length"]
  : never;

type testNaive = Naive<"10", [[], [], []]>;

type testRec = Rec<'39'>;
