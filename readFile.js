var fs = require('fs');

// Async
fs.readFile('input.txt', 'utf8', function (err, data) {
    console.log("ASYNC :");
    console.log(data);
});

// Synchronous <== UTILISEZ CELUI-CI
var myFile = fs.readFileSync('input.txt', 'utf8');
console.log(myFile);

// For line by line
var lineReader = require('readline').createInterface({
    input: fs.createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    console.log("HERE'S A NEW LINE : " + line);
}).on('close', function () {
    console.log("Finished reading file line by line");
});

// Parse JSON

var myJson = fs.readFileSync('input.json', 'utf8');
console.log('MY JSON');
console.log(JSON.parse(myJson));


// Write file

var myObject = {
    dude : "patate",
    meaningOfLife : 42
};

fs.writeFileSync("output.json", JSON.stringify(myObject));
