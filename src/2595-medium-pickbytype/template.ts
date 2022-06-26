type PickByType<T extends object, U> = {
  [K in keyof T as U extends T[K] ? K : never]: T[K]
}

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }