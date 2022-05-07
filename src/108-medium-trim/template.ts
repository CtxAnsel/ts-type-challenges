type Trim<S extends string> = S extends `${Space}${infer R}` 
  ? 
    Trim<R> 
  : S extends `${infer P}${Space}` 
      ? Trim<P>
      : S;

