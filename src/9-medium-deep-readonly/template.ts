type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends Record<string, unknown> | Array<unknown> ? DeepReadonly<T[P]> : T[P];
}
