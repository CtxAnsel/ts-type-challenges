type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Whole = Num | 0;
type Day31 = '01' | '03' | '05' | '07' | '08' | '10' | '12'
type Day30 = '04' | '06' | '09' | '11'

type ValidMonth<Month> = Month extends `0${Num}` | '10' | '11' | '12' ? true : false;

type ValidDay<Month extends string, Day extends string> = Month extends Day31
? Day extends `0${Num}` | `1${Whole}` | `2${Whole}` | '30' | '31'
  ? true
  : false
: Month extends Day30
  ? Day extends `0${Num}` | `1${Whole}` | `2${Whole}` | '30'
    ? true
    : false
  : Day extends `0${Num}` | `1${Whole}` | `2${Exclude<Whole, 9>}`
    ? true
    : false;

type ValidDate<T extends string> = `${T}` extends `${infer M1}${infer M2}${infer D1}${infer D2}`
  ? ValidMonth<`${M1}${M2}`> extends true
    ? ValidDay<`${M1}${M2}`, `${D1}${D2}`> extends true
      ? true
      : false
    : false
  : false;