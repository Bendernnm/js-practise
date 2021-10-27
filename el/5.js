const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
  Promise.resolve().then(() => console.log('promise'));
  console.log('end');
});

