import https from 'https';
const title = 'JavaScript';
const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;
https.get(apiUrl, (res) => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      const books = result.docs.slice(0, 5);

      console.log(`Top 5 books for "${title}":`);
      books.forEach((book, index) => {
        const authors = book.author_name ? book.author_name.join(', ') : 'Unknown';
        console.log(`${index + 1}. ${book.title} - ${authors}`);
      });
    } catch (err) {
      console.error('❌ Error parsing data:', err.message);
    }
  });
}).on('error', (err) => {
  console.error('❌ API Error:', err.message);
});
