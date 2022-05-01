type MyOmit<T extends object, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};
