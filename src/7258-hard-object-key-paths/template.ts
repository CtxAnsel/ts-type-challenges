type ArrayObjectKeyType = string | number;

type Path<K, Res extends string = ""> = Res extends ""
  ? `${K & ArrayObjectKeyType}`
  : K extends number
  ? `${Res}.${K}` | `${Res}.[${K}]` | `${Res}[${K}]`
  : `${Res}.${K & string}`;

type ObjectKeyPaths<
  T extends object,
  Res extends string = "",
  K extends keyof T = keyof T
> = K extends K
  ? T[K] extends Record<keyof any, any>
    ? Path<K, Res> | ObjectKeyPaths<T[K], Path<K, Res>>
    : Path<K, Res>
  : never;
