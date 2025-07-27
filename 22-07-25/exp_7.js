import needle from 'needle';
import open from 'open';

const url = 'https://api.thecatapi.com/v1/images/search';

needle.get(url, async (err, res) => {
  if (err || res.statusCode !== 200) {
    console.error("❌ Error fetching cat image.");
    return;
  }

  const imageUrl = res.body[0]?.url;
  if (imageUrl) {
    console.log(`🐱 Cat Image URL: ${imageUrl}`);
    // ✅ open is a function here in ESM
    await open(imageUrl);
  } else {
    console.log("⚠️ No image URL found.");
  }
});
