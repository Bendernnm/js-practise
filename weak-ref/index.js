let b = { f: 1 };

class A {
  constructor(el) {
    this.b = new WeakRef(el);
    this.f = 2;
  }
}

const a = new A(b);

setInterval(() => {
  console.log(a.b.deref());
  console.log(a.f);

  b = null;
}, 1000);

