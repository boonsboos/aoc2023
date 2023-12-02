const fs = require('fs');
const { exit } = require('process');

let file = fs.readFileSync('input.txt', 'utf8');

let lines = file.split(/\n/);

let matches = [];

lines.forEach(line => {
    let arr = "";

    for (let i = 0; i < line.length; i++) {
        let sub = line.substring(i);
        
        if (sub.startsWith('one')) {
            arr += '1';
        }
        else if (sub.startsWith('two')) {
            arr += '2';
        }
        else if (sub.startsWith('three')) {
            arr += '3';
        }
        else if (sub.startsWith('four')) {
            arr += '4';
        }
        else if (sub.startsWith('five')) {
            arr += '5';
        }
        else if (sub.startsWith('six')) {
            arr += '6';
        }
        else if (sub.startsWith('seven')) {
            arr += '7';
        }
        else if (sub.startsWith('eight')) {
            arr += '8';
        }
        else if (sub.startsWith('nine')) {
            arr += '9';
        }
        else if (sub.startsWith('zero')) {
            arr += '0';
        } else if (sub[0] >= '0' && sub[0] <= '9') {
            arr += ''+sub[0];
        }
    }

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