type Pop<T extends any[]> = T extends [...infer X, infer Y] ? X : never;
