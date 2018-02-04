var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.readdir('./', function(err, files) {
    if (err) throw err;
    console.log('ODCZYTANO KATALOG');
    console.log(files);
    
    fs.writeFile('./text.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});