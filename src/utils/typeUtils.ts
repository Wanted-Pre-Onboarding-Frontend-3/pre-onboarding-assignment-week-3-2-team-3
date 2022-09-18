export type WithRequiredProperty<T, Key extends keyof T> = T & {
  [P in Key]-?: T[P];
};
