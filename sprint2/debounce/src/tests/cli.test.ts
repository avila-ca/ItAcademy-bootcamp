import debounce from '../debounce';


describe('debounce function', () => {
    const mockFunction = jest.fn();
    jest.useFakeTimers();

    test('calling 3 times to debounce',() => {
        let arr: string[] = [];

        jest.useFakeTimers();
        const debouncedFn = debounce(mockFunction, 'mockValue', arr, 200);
        
        debouncedFn('value1', arr);
        debouncedFn('value2', arr);
        debouncedFn('value3', arr);

        jest.advanceTimersByTime(200);

        expect(mockFunction).toHaveBeenCalledTimes(1);

        expect(mockFunction).toHaveBeenCalledWith('value3', ['value1', 'value2', 'value3']);
    })
})