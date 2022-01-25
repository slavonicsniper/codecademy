const fs = require('fs');

module.exports = (dir, ext, cb) => {
    fs.readdir(dir, (err, data) => {
        if(err) {
            return cb(err);
        }
        cb(null, data.filter(file => file.includes('.') && file.split('.').pop() === ext));
    });
};