const fs = require('fs'), process = require('process');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, files) => {
    if(err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        if(file.includes('.') && file.split('.').pop() === ext) {
            console.log(file);
        }
    });
});