type DropChar<S extends string, C extends string, Res extends string  = ''> = 
  S extends `${infer F}${infer L}` 
   ? F extends C 
    ? DropChar<L, C, `${Res}`> 
    : DropChar<L, C, `${Res}${F}`>
   : Res;

type demo = DropChar<'a b c', 'b'>;
