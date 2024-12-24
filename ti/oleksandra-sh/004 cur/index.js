function sum(num1) {
}

const r1 = sum(1)(2)();
const r2 = sum(1)(2)(3)(4)();
const r3 = sum(1)(2)(3)(4)(-3)(-5)();

console.log(r1);
console.log(r2);
console.log(r3);
