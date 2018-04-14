// 
const add = require('./testedFiles/add');
describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});
const decrease = require('./testedFiles/decrease');
describe('decrease', () => {
    it('should first parameter decrease second parameter', () => {
        expect(decrease(22, 8)).toBe(14);
    });
});