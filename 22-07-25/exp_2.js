const needle = require('needle');
const country = process.argv[2] || "India";
const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

needle.get(url, (err, res) => {
  if (err || res.statusCode !== 200) return console.error("Error fetching data.");
  const c = res.body[0];
  console.log(`\n🌍 ${c.name.common}`);
  console.log(`🏙️ Capital: ${c.capital?.[0] || "N/A"}`);
  console.log(`🗺️ Region: ${c.region}`);
  console.log(`👥 Population: ${c.population.toLocaleString()}`);
  console.log(`💱 Currencies: ${Object.entries(c.currencies || {}).map(([code, val]) => `${code} (${val.name})`).join(", ")}`);
  console.log(`🗣️ Languages: ${Object.values(c.languages || {}).join(", ")}`);
});
