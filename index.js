const fs = require('fs');
const config = require('./config.js');
const imgFolder = './img/';

console.log('/\\/\\/\\/\\/\\/\\/\\/\\/\\');
console.log('Image Date Updater');
console.log('settings dates to: ');
console.log(config.date);
console.log('/\\/\\/\\/\\/\\/\\/\\/\\/\\\n');

fs.readdir(imgFolder, (err, files) => {
  console.log(files.length + ' IMAGES TO UPDATE\n');
  files.forEach(file => {
    var atime = new Date(config.date);
    fs.utimes(imgFolder + file, atime, atime, function (err, data) {
      if (err) {
        return console.error('Error', err);
      } else {
        console.log('  \u2713 ' + file);
      }
    });
  });
});
