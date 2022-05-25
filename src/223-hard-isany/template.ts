type IsAny<T> = [T] extends [never] ? false : keyof any extends keyof T ? true : false;
