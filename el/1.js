const fs = require('fs');

const sync = (duration) => {
  const startAt = Date.now();

  while (Date.now() - startAt < duration) ;
};

setTimeout(() => console.log('timer'), 4000);

setImmediate(() => console.log('immediate'))

fs.readFile(__filename, () => {
  console.log('fs')

  fs.readFile(__filename, () => {
    console.log('fs2')
  })
  setTimeout(() => console.log('timer'), 4000);

  setImmediate(() => console.log('immediate'))
});

process.nextTick(() => console.log('tick'));

sync(5000);
