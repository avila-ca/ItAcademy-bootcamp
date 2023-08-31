import {memoize} from '../cli/memoize';


describe('memoize function', () => {

    
    test('calling to memoize and executes the function inmediatly',() => {
        
        const logMock = jest.fn(); 
    
        console.log = logMock; 
    
        const memoizedFunction = memoize();
    
        memoizedFunction(); 
        memoizedFunction(); 
    
        expect(logMock).toHaveBeenCalledTimes(2);
    })
})
