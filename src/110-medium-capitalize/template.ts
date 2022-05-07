type MyCapitalize<S extends string> = S extends `${infer P}${infer Q}`?`${Uppercase<P>}${Q}`:''


type str = 'hello world';

type cap = MyCapitalize<str>;

type Letter = {
  a: 'A'
  b: 'B'
  c: 'C'
  d: 'D'
  e: 'E'
  f: 'F'
  g: 'G'
  h: 'H'
  i: 'I'
  j: 'J'
  k: 'K'
  l: 'L'
  m: 'M'
  n: 'N'
  o: 'O'
  p: 'P'
  q: 'Q'
  r: 'R'
  s: 'S'
  t: 'T'
  u: 'U'
  v: 'V'
  w: 'W'
  x: 'X'
  y: 'Y'
  z: 'Z'
}

type MyCapitalize2<S extends string> = S extends `${infer T}${infer Q}` ? `${T extends keyof Letter ? Letter[T] : T}${Q}` : S
