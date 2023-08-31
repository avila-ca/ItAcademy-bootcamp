import throttle from '../throttle';


describe('Throttle function', () => {

    
    test('calling 3 times to throttle but nothing executes the function inmediatly',() => {
        const mockFunction = jest.fn();
        const throttledFn = throttle(mockFunction, 'somevalue', 200);

        throttledFn('value1');
        throttledFn('value2');
        throttledFn('value3');

        expect(mockFunction).not.toHaveBeenCalled();
    })
    test('calling 3 times to throttle but only executes once', () =>{
        jest.useFakeTimers();

        const mockFunction = jest.fn();
        const throttledFn = throttle(mockFunction, 'somevalue', 200);
        
        throttledFn('value1');
        throttledFn('value2');
        throttledFn('value3');

        jest.advanceTimersByTime(200);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    })
    test('calling 3 times to throttle but only executes the last value', () =>{
        jest.useFakeTimers();

        const mockFunction = jest.fn();
        const throttledFn = throttle(mockFunction, 'somevalue', 200);
        
        throttledFn('value1');
        throttledFn('value2');
        throttledFn('value3');
        jest.advanceTimersByTime(200);
        expect(mockFunction).toHaveBeenCalledWith('value3');
    })
})