// Do not modify this file.
// about 10% percent chance to get a reject
// and about 10% percent chance to get null in resolve
function fakeAsyncOperation (returnValue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random();
      if (rnd < 0.1) {
        reject(`Failed to fake load and send back: ${JSON.stringify(returnValue)}`);
      } else if (rnd >= 0.1 && rnd < 0.2) {
        resolve(null);
      }
      resolve(returnValue);
    }, 250);
  });
};

async function getBook() {
  return await fakeAsyncOperation({ author: '123' });
};

async function getAuthor(id) {
  return await fakeAsyncOperation({ id, name: 'Ellie', biography: '321' });
};

async function getBiography(id) {
  return await fakeAsyncOperation({ id, text: 'Lorem ipsum' });
};

module.exports = {
  getBook,
  getAuthor,
  getBiography
};