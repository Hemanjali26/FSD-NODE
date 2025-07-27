import https from 'https';
import open from 'open';

const url = 'https://dog.ceo/api/breeds/image/random';

https.get(url, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', async () => {
    const result = JSON.parse(data);
    if (result.status === 'success') {
      console.log("🐶 Dog Image URL:", result.message);
      await open(result.message);
    } else {
      console.error('❌ Failed to fetch dog image.');
    }
  });
}).on('error', (err) => {
  console.error('❌ Error:', err.message);
});
