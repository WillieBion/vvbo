export const SIZES = {
  icon: 25,
} as const;

type ObjectValues<T> = T[keyof T];

export type Sizes = ObjectValues<typeof SIZES>;
