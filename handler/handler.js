const {
  getBook,
  getAuthor,
  getBiography,
} = require('./fakeAsyncLoadOperation');

module.exports = async function(req, res) {
  try {
    const book = await getBook();
    if (book) {
      try {
        const author = await getAuthor(book.author);
        if (author) {
          try {
            const biography = await getBiography(author.biography);
            if (biography) {
              res.send(JSON.stringify({ book, author, biography }));
            } else {
              res.send(JSON.stringify({ error: 'Biography not found' }));
            }
          } catch(biographyLoadingError) {
            res.send(JSON.stringify({ error: biographyLoadingError }));
          }
        } else {
          res.send(JSON.stringify({ error: 'Author not found' }));
        }
      } catch(authorLoadingError) {
        res.send(JSON.stringify({ error: authorLoadingError }));
      }
    } else {
      res.send(JSON.stringify({ error: 'Book not found' }));
    }
  } catch(bookLoadingError) {
    res.send(JSON.stringify({ error: bookLoadingError }));
  }
};
