import inquirer from 'inquirer';

inquirer
    .prompt([
       {
        type:'checkbox-plus',
        name: 'useCase',
        message: 'What do you want?',
        choices: ['Add', 'Remove', 'Completed', 'list']
       }
    ])