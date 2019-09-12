export function getRandomData(scale: number, balanced = true, count = 20) {
  // generate an array of random data
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(((Math.random() - (balanced ? 0.5 : 0) ) * scale).toFixed(1));
  }
  return data;
}
