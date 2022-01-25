const fs = require('fs'), process = require('process');

const file = process.argv[2];

fs.readFile(file, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data.match(/\n/g).length);
  })