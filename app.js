// const fs = require('fs');
// const generatePage = require('./src/page-template.js')
const inquirer = require('inquirer')
const profileDataArgs = process.argv.slice(2)
const [name, github] = profileDataArgs;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('portfolio complete! checkout index.html to see the output!')
// });

