const {expect} = require('chai');
const rgbToHexColor = require('./rgbToHex.js');

describe('RGB to HEX', () => {
    it('returns black in HEX code', () => {
        expect(rgbToHexColor(0, 0, 0)).equal('#000000');
    });

    it('returns white in HEX code', () => {
        expect(rgbToHexColor(255, 255, 255)).equal('#FFFFFF');
    });

    it('returns #7b2cb4 in HEX code', () => {
        expect(rgbToHexColor(123, 44, 180)).equal('#7B2CB4');
    });

    it('returns negative red', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns negative green', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('returns negative blue', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    
    it('returns over red', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('returns over green', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('returns over blue', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});

// Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// Return undefined if any of the input parameters are of invalid type or not in the expected range
