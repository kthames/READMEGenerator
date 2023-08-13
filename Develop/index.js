// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: `What is your project's description?`,
        },
        {
            type: 'input',
            name: 'installInstruct',
            message: `What are your project's installion instructions?`,
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: `What is your project's usage information?`,
        },
        {
            type: 'input',
            name: 'contribGuide',
            message: `What are your project's contribution guidelines?`,
        },
        {
            type: 'input',
            name: 'testInstruct',
            message: `What are your project's test instructions?`,
        },
        {
            type: 'list',
            message: 'Please select your desired license:',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Common Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License','GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
          },
    ])
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README-sample.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README-sample.md'))
      .catch((err) => console.error(err));
  };


// Function call to initialize app
init();