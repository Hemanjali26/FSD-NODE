const needle = require('needle');
const url = 'https://randomuser.me/api/';

needle.get(url, (err, res) => {
  if (err || res.statusCode !== 200) return console.error("Error fetching user.");
  console.log("23B01A4539");
  const user = res.body.results[0];
  const fullName = `${user.name.first} ${user.name.last}`;
  const gender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
  const country = user.location.country;
  const email = user.email;

  console.log(` Name: ${fullName} | Gender: ${gender} | Country: ${country} | Email: ${email}`);
});
