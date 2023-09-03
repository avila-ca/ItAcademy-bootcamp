import {memoize} from '../cli/memoize';
import { loopFn } from '../cli/cli';

describe('memoize function', () => {

    
    test('calling to memoize and trying to execute correctly 2 times',() => {
        
        const mockFunc = jest.fn(); 
    
        console.log = mockFunc; 
    
        const memoizedFunction = memoize(mockFunc);
    
        memoizedFunction(12); 
        memoizedFunction(12); 
    
        expect(mockFunc).toHaveBeenCalledTimes(2);
    })
    test('Calling the function with 2 and would return 4',() => {

        const mockFn = jest.fn(); 
    
    
        const memoizedFunction = memoize(loopFn);
    
        //memoizedFunction(2);  
    
        expect(memoizedFunction(2)).toBe(4);
    })
})
