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
    test('Calling the function with the argument 2 and will return 4',() => {

        const memoizedFunction = memoize(loopFn);
        
        expect(memoizedFunction(2)).toBe(4);
    })
    test('Calling the function with the same argument and the last call will be more quick than the first', () =>{
       
        let result = 0;
        
        const mockFn = jest.fn((n:number) => {
            
            for (let index = 0; index < n; index++) {
                for (let indexB = 0; indexB < n; indexB++) {
                    result++;
                }
                
            }
        })

        const memoized = memoize(mockFn);

        const start1 = performance.now();
        const result1 = memoized(56);
        const end1 = performance.now();
        const time1 = end1 - start1;

        const start2 = performance.now();
        const result2 = memoized(56);
        const end2= performance.now();
        const time2 = end2 - start2;

        expect(mockFn).toHaveBeenCalledTimes(2);
        expect(mockFn).toHaveBeenCalledWith(56);

        expect(time2).toBeLessThan(time1)

    })
})
