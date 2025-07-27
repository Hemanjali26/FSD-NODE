import axios from 'axios';

axios.get('https://disease.sh/v3/covid-19/countries/India')
  .then(res => {
    const india = res.data.Countries.find(c => c.Slug === 'india');
    if (india) {
      console.log(`🇮🇳 India – Confirmed: ${india.TotalConfirmed} | Deaths: ${india.TotalDeaths} | Recovered: ${india.TotalRecovered}`);
    } else {
      console.log("❌ India data not found.");
    }
  })
  .catch(err => {
    console.error("❌ API Error:", err.message);
  });
