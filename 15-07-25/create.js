const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'user.txt');
const outputPath = path.join(__dirname, 'user.json');
fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading user.txt:', err);
    return;
  }
  console.log('RAW FILE CONTENT:\n', data);
  const lines = data.split('\n');
  const jsonObject = {};
  lines.forEach(line => {
    console.log('LINE:', line); 
    const [key, value] = line.split('=');
    if (key && value !== undefined) {
      let val = value.trim();
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (!isNaN(val)) val = Number(val);
      jsonObject[key.trim()] = val;
    }
  });
  fs.writeFile(outputPath, JSON.stringify(jsonObject, null, 2), err => {
    if (err) {
      console.error('Error writing user.json:', err);
    } else {
      console.log('\n✅ user.json created successfully!\n');
      console.log('OUTPUT JSON:\n', JSON.stringify(jsonObject, null, 2));
    }
  });
});
