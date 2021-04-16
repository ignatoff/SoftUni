function argumentInfo() {
    const list = {};

    for (const arg of arguments) {
        const mode = typeof arg;
        console.log(`${mode}: ${arg}`);
        
        if (!list.hasOwnProperty(mode)) list[mode] = [];
        
        list[mode].push(arg);
    }
    Object.entries(list).sort((a, b) => b[1].length - a[1].length)
        .forEach(kvp => {
            console.log(`${kvp[0]} = ${kvp[1].length}`);            
        });    
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
// Mock the console
/*
var oldConsole = console.log;
var output = [];
console.log = function (input) {
    output.push(input);
};
result('cat', 42, function () { console.log('Hello world!'); });

console.log = oldConsole;

var expectedOutput = [
    'string: cat',
    'number: 42',
    "function: function () { console.log('Hello world!'); }",
    'string = 1',
    'number = 1',
    'function = 1'
];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i < output.length; i++) {
    var current = output[i];
    expect(current).to.contains(expectedOutput[i], "Incorrect arguments in output.");
}*/