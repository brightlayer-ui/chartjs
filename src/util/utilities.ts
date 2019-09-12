// Generate an array of random data
export function getRandomData(scale: number, balanced = true, count = 20): number[] {
   const data = [];
   for (let i = 0; i < count; i++) {
      data.push(Number(((Math.random() - (balanced ? 0.5 : 0)) * scale).toFixed(1)));
   }
   return data;
}
