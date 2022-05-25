type NullStatus = 0 | "" | false | [] | Record<string, never>;
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends NullStatus
    ? AnyOf<Rest>
    : true
  : false;