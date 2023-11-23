type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type OmitFunctions<T, K> = Omit<Omit<T, K>, FunctionPropertyNames<T>>;

type ObjectValues<T> = T[keyof T];
