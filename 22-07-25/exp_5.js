const needle = require('needle');
const word = process.argv[2] || "courage";
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

needle.get(url, (err, res) => {
  if (err || res.statusCode !== 200) return console.error("Error fetching definition.");

  const data = res.body[0];
  const meaning = data.meanings[0];
  const partOfSpeech = meaning.partOfSpeech;
  const definition = meaning.definitions[0].definition;

  console.log(`📘 ${word} (${partOfSpeech}): ${definition}`);
});
