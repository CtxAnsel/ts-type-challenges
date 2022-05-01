import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [infer K, ...infer P] ? Equal<K, U> extends true ? true : Includes<P, U> : false; 
