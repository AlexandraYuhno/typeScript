type FlatFunction<T> = (dict: Record<string, T>) => T[];

const flattenConstructor = <T, >(): FlatFunction<T> => {
  return (dict) => Object.values(dict);
};

const flat1 = flattenConstructor<number>();
const r1 = flat1({ a: 1, b: 2 });
console.log(r1);

const flat2 = flattenConstructor<string>();
const r2 = flat2({ a: '1', b: '2' });
console.log(r2);
