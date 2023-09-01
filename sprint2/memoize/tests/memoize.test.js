"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("../cli/memoize");
describe('memoize function', () => {
    test('calling to memoize and executes the function inmediatly', () => {
        const logMock = jest.fn();
        console.log = logMock;
        const memoizedFunction = (0, memoize_1.memoize)();
        memoizedFunction();
        memoizedFunction();
        expect(logMock).toHaveBeenCalledTimes(2);
    });
});
