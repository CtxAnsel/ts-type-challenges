import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type TT<K1, K2> = K1 extends K2 ? K2 extends K1 ? never : K1 : K2 extends K1 ? never : K1

type res = keyof (Foo | Coo);

type res1 = keyof (Foo & Coo);

type result = TT<res1, res>;

type res2 = keyof Foo | keyof Coo;

type res3 = keyof Foo & keyof Coo;


type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
