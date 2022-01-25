const mymodule = require('./mymodule'), process = require('process');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, files) => {
    if(err) {
        console.log(err);
        return;
    }
    files.forEach(element => {
        console.log(element);
    });
});