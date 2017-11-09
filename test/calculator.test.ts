import {Calculator} from "../src/calculator";

describe('Calculator', () => {
    it('should add two numbers', () => {
        expect(new Calculator().add(1, 2)).toBe(3);
    });
});