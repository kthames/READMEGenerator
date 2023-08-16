var link = " ";
    
    switch(license) {
        case 'Apache License 2.0': 
            link = "(https://opensource.org/licenses/Apache-2.0) "
            break;
        case 'GNU General Public License v3.0': 
            link = "(https://www.gnu.org/licenses/gpl-3.0) "
            break;
        case 'MIT License': 
            link = "(https://opensource.org/licenses/MIT)"
            break;
        case 'BSD 2-Clause "Simplified" License"':
            link = "(https://opensource.org/licenses/BSD-2-Clause)"
            break;
        case 'BSD 3-Clause "New" or "Revised" License"':
            link = "(https://opensource.org/licenses/BSD-3-Clause)"
            break;
        case 'Boost Software License 1.0': 
            link = "(https://www.boost.org/LICENSE_1_0.txt)"
            break;
        case 'Creative Common Zero v1.0 Universal':
            link = "(http://creativecommons.org/publicdomain/zero/1.0/) "
            break;
        case 'Eclipse Public License 2.0':
            link = "(https://opensource.org/licenses/EPL-1.0)"
            break;
        case 'GNU Affero General Public License':
            link = "(https://www.gnu.org/licenses/agpl-3.0)"
            break;
        case 'GNU Lesser General Public License v2.1':
            link = "(https://www.gnu.org/licenses/lgpl-3.0)"
            break;
        case 'Mozilla Public License 2.0':
            link = "(https://opensource.org/licenses/MPL-2.0)"
            break;
        case 'The Unlicense':
            link = "(http://unlicense.org/)"
            break;
        default:
            link = " ";
    }

    return link;




       
    var badge = " ";
    
    switch(license) {
        case 'Apache License 2.0': 
            badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]"
            break;
        case 'GNU General Public License v3.0': 
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
            break;
        case 'MIT License': 
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
            break;
        case 'BSD 2-Clause "Simplified" License"':
            badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]"
            break;
        case 'BSD 3-Clause "New" or "Revised" License"':
            badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)]"
            break;
        case 'Boost Software License 1.0': 
            badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
            break;
        case 'Creative Common Zero v1.0 Universal':
            badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]"
            break;
        case 'Eclipse Public License 2.0':
            badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]"
            break;
        case 'GNU Affero General Public License':
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]"
            break;
        case 'GNU Lesser General Public License v2.1':
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]"
            break;
        case 'Mozilla Public License 2.0':
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
            break;
        case 'The Unlicense':
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
            break;
        default:
            badge = " ";
    }

    return badge;

`# ${answers}

## Badges


## Description 
${answers.description}

## Table of Contents
- [Installation Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#installation-instructions)
- [Usage Information](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#usage-information)
- [License](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#license)
- [Badges](#https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#badges)
- [Contributions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#how-to-contribute)
- [Testing Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#testing-instructions)
- [Questions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#questions)

## Installation Instructions
${answers.installInstruct}

## Usage Information
${answers.usageInfo}

## License

## How to Contribute
${answers.contribGuide}
## Testing Instructions
${answers.testInstruct}
## Questions
### Want to see more of my work? 
#### My GitHub username: ${answers.github}
### How can you contact me? 
####${answers.email}
`;


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
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License"', 'BSD 3-Clause "New" or "Revised" License"', 'Boost Software License 1.0', 'Creative Common Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License','GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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