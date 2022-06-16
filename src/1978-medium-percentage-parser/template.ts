type PercentageParser<A extends string> = A extends `${infer N}%`
  ? N extends `-${infer NN}`
    ? ["-", NN, "%"]
    : N extends `+${infer NN}`
    ? ["+", NN, "%"]
    : ["", N, "%"]
  : A extends `-${infer NN}`
  ? ["-", NN, ""]
  : A extends `+${infer NN}`
  ? ["+", NN, ""]
  : ["", A, ""];
