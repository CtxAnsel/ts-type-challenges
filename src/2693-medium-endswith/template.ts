type EndsWith<T extends string, U extends string> = T extends `${infer F}${U}`
  ? true
  : false;

type aa = EndsWith<"abc", "bc">; // expected to be false
type bb = EndsWith<"abc", "abc">; // expected to be true
type cc = EndsWith<"abc", "d">; // expected to be false
