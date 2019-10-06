export function memoize(fun) {
  const cache = {};
  return (funcParam = "default") => {
    const idx = JSON.stringify(funcParam);
    if (!(idx in cache)) {
      cache[idx] = fun(funcParam);
    }
    return cache[idx];
  };
}

export default {
  memoize
};
