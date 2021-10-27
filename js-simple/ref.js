const a = { a1: 1 };
let b = a;

b.a1 = 3;

console.log(a);
console.log(b);

b = { a1: 2 };

console.log(a);
console.log(b);

a.a1 = 3;

console.log(a);
console.log(b);
