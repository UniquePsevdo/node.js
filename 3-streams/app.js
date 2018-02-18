const fs = require('fs');
const readable1 = fs.createReadStream(__dirname + '/greet.txt');
readable1.on('data', (chunk)=>{
    console.log(chunk);
})
const readable2 = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf8'});
readable2.on('data', (chunk)=>{
    console.log(chunk);
})

const readable3 = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf8', highWaterMark: 1024});
const writable = fs.createWriteStream(__dirname + '/greetCopy.txt');
readable3.on('data', (chunk)=>{
    console.log(chunk.length);
    writable.write(chunk);
})