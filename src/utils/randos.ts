export function generateRandos(): number[] {
  const randos = [];
  for (let i = 0; i < 30; i++) {
    randos.push(Math.random());
  }
  return randos;
}
