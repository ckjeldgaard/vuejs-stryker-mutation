import {HelloComponent} from "../src/hello-component";

describe('HelloComponent', () => {

    it('should initialize HelloComponent', () => {
        const expected: string = new HelloComponent().helloString;
        expect(expected).toBe('Hello from Vue');
    });
});