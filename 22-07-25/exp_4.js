const needle = require('needle');
const url = 'https://v2.jokeapi.dev/joke/Any';
needle.get(url, (err, res) => {
  if (err || res.statusCode !== 200) return console.error("Error fetching joke.");
  const joke = res.body;
  if (joke.type === 'single') {
    console.log(`${joke.joke}`);
  } else if (joke.type === 'twopart') {
    console.log(`${joke.setup} – ${joke.delivery}`);
  } else {
    console.log("No joke found.");
  }
});
