type If<C extends boolean, T, F> = C extends true ? T : F;


// 需要区分null在严格模式和非严格模式下不同表现