const a = new Set([10, 20, 30, 40, 50])
const b = new Set([30, 40, 50, 60, 70])

const C = new Set([a,b])
console.log(C);
const akesişimB = [a].filter(a => b.has(a));
console.log(akesişimB)
const afarkB = [a].filter(a => !b.has(a));
console.log(afarkB);
