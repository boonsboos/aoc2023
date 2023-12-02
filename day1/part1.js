const fs = require('fs');
const { exit } = require('process');

let file = fs.readFileSync('input.txt', 'utf8');

let lines = file.split(/\n/);

let matches = [];

lines.forEach(line => {

    let arr = Array.from(line.matchAll(/\d/g));
    
    if (arr.length > 1) {
        matches.push(arr[0] + arr[arr.length - 1])
    } else {
        matches.push(arr[0] + arr[0])
    }
    
});

var sum = 0;
matches.forEach(e => {
    sum += (1*e);
});

console.log(sum);