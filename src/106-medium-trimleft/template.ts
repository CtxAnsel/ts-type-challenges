type Space = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${Space}${infer P}`
  ? TrimLeft<P>
  : S;
