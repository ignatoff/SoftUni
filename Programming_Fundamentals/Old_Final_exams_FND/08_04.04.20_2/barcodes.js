function barcodes(array) {
    
    let num = Number(array.shift());

    array.forEach(line => {
        let sample = /^@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+$/g;
        let match = line.match(sample);

        if (match) {
            let group = /\d/g;
            let digits = match[0].match(group);

            if (digits) console.log(`Product group: ${digits.join('')}`);
            else console.log(`Product group: 00`);            
        } else {
            console.log(`Invalid barcode`);
        }
    });
}

barcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);

console.log(`-----------------------------`);

barcodes(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
      ]
);