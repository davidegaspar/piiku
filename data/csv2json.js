const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

let filename = process.argv[2];

let data = parse(fs.readFileSync(`${__dirname}/${filename}`, 'utf8'), {columns: true});
fs.writeFileSync(`${path.basename(filename, '.csv')}.json`, JSON.stringify(data, null, 2));
console.log('done');
