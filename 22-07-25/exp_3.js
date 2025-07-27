const needle = require('needle');
const API_KEY = 'CXsefKNc0QDkXai8qjwJBzUmDVhXwE3S';
const year = process.argv[2] || new Date().getFullYear();

const url = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=IN&year=${year}`;

needle.get(url, (err, res) => {
  if (err || res.statusCode !== 200) return console.error("Error fetching holidays.");

  const holidays = res.body.response.holidays;
  const nationalHolidays = holidays.filter(h => h.type.includes('National holiday'));

  console.log(`\n🇮🇳 National Holidays in India - ${year}\n`);
  nationalHolidays.forEach(h => {
    console.log(`${h.date.iso} - ${h.name} - ${h.type.join(', ')}`);
  });
});
