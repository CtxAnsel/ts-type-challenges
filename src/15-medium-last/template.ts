type Last<T extends any[]> = T extends [...infer X, infer Y] ? Y : never;
