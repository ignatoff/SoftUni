const { expect } = require('chai');
const HolidayPackage = require('./package.js');

describe('Holiday Package', () => {
    let instance = null;
    beforeEach(() => instance = new HolidayPackage('Italy', 'Summer'));

    it('instantiate', () => {
        expect(instance.destination).equal('Italy');
        expect(instance.season).equal('Summer');
        expect(instance.insuranceIncluded).to.be.false;
        expect(Array.isArray(instance.vacationers)).to.be.true;
    });
    
    it('insurance Included throw error', () => {
        expect(() => instance.insuranceIncluded = 1).to.throw(`Insurance status must be a boolean`);
        expect(() => instance.insuranceIncluded = 'a').to.throw(`Insurance status must be a boolean`);
        expect(() => instance.insuranceIncluded = []).to.throw(`Insurance status must be a boolean`);
    });
    
    it('insurance Included', () => {
        instance.insuranceIncluded = true;
        expect(instance.insuranceIncluded).to.be.true;
    });
    
    it('show Vacationers throw error', () => {
        instance.vacationers.length = 0;
        expect(instance.showVacationers()).equal(`No vacationers are added yet`);
    });
    
    it('show Vacationers', () => {
        instance.vacationers = ['a', 'b'];
        expect(instance.showVacationers()).equal(`Vacationers:\na\nb`)
    });
    
    it('add Vacationer throw error', () => {
        expect(() => instance.addVacationer(1)).to.throw(`Vacationer name must be a non-empty string`);
        expect(() => instance.addVacationer({})).to.throw(`Vacationer name must be a non-empty string`);
        expect(() => instance.addVacationer(' ')).to.throw(`Vacationer name must be a non-empty string`);
        expect(() => instance.addVacationer('a a a')).to.throw(`Name must consist of first name and last name`);
        expect(() => instance.addVacationer('a')).to.throw(`Name must consist of first name and last name`);
    });
    
    it('generate Holiday Package throw error', () => {
        instance.vacationers.length = 0;
        expect(() => instance.generateHolidayPackage()).to.throw(`There must be at least 1 vacationer added`);
    });
    
    it('generate Holiday Package', () => {
        instance.vacationers = ['a', 'b'];
        let totalPrice = instance.vacationers.length * 400;

        expect(totalPrice).equal(800);

        instance.season = 'Summer';
        instance.insuranceIncluded = true;

        expect(instance.generateHolidayPackage()).equal(`Holiday Package Generated\nDestination: Italy\n${instance.showVacationers()}\nPrice: 1100`);
    });

    it('generate Holiday Package no insurance', () => {
        instance.vacationers = ['a', 'b'];
        let totalPrice = instance.vacationers.length * 400;

        expect(totalPrice).equal(800);

        instance.season = 'Summer';
        instance.insuranceIncluded = false;

        expect(instance.generateHolidayPackage()).equal(`Holiday Package Generated\nDestination: Italy\n${instance.showVacationers()}\nPrice: 1000`);
    });

    it('generate Holiday Package spring', () => {
        instance.vacationers = ['a', 'b'];
        let totalPrice = instance.vacationers.length * 400;

        expect(totalPrice).equal(800);

        instance.season = 'Spring';
        instance.insuranceIncluded = true;

        expect(instance.generateHolidayPackage()).equal(`Holiday Package Generated\nDestination: Italy\n${instance.showVacationers()}\nPrice: 900`);
    });
});