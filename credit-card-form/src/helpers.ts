export const sep = (xs: string, s: number): string[] =>
  xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : [];
