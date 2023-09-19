const hello = require('../hello-world')

describe('Exercise 1: Hello world', () => {
    test("the function says 'HELLO WORLD'", () => {
    const logSpy = jest.spyOn(global.console, 'log');

    hello.hello();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('HELLO WORLD');
    })
})