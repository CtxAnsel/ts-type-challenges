type LengthOfString<S extends string, Res extends any[] = []> = S extends `${infer First}${infer Last}` ? LengthOfString<Last, [...Res, First]> : Res["length"];
