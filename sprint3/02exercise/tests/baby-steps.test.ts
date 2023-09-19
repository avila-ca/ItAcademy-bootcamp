
const {sum} = require('../baby-steps');
describe('Exercise 2:', () => {

  test('sum debería sumar correctamente los argumentos: 2, 3 , 4, para que de 9', () => {

    let result = sum(['node', 'sum.js', '2', '3', '4']);
    console.log(result);
    
    expect(result).toBe(9); 
  });
})
