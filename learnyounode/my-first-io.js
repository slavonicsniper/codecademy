const fs = require('fs'), process = require('process');

const file = process.argv[2];

try {
    const data = fs.readFileSync(file, 'utf8')
    console.log(data.match(/\n/g).length);
  } catch (err) {
    console.error(err)
  }