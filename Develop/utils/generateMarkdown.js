// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var badge = " ";
    
    switch(license) {
        case 'Apache License 2.0': 
            badge = "![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)"
            break;
        case 'GNU General Public License v3.0': 
            badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
            break;
        case 'MIT License': 
            badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
            break;
        case 'BSD 2-Clause "Simplified" License"':
            badge = "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
            break;
        case 'BSD 3-Clause "New" or "Revised" License"':
            badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)"
            break;
        case 'Boost Software License 1.0': 
            badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
            break;
        case 'Creative Common Zero v1.0 Universal':
            badge = "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)"
            break;
        case 'Eclipse Public License 2.0':
            badge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
            break;
        case 'GNU Affero General Public License':
            badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"
            break;
        case 'GNU Lesser General Public License v2.1':
            badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"
            break;
        case 'Mozilla Public License 2.0':
            badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
            break;
        case 'The Unlicense':
            badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
            break;
        case 'No License':
            badge = " ";
    }

    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var link = " ";
    
    switch(license) {
        case 'Apache License 2.0': 
            link = "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0) "
            break;
        case 'GNU General Public License v3.0': 
            link = "[GNU General Public License v3.0'](https://www.gnu.org/licenses/gpl-3.0) "
            break;
        case 'MIT License': 
            link = "[MIT License](https://opensource.org/licenses/MIT)"
            break;
        case 'BSD 2-Clause "Simplified" License"':
            link = '[BSD 2-Clause "Simplified" License"](https://opensource.org/licenses/BSD-2-Clause)'
            break;
        case 'BSD 3-Clause "New" or "Revised" License"':
            link = '[BSD 3-Clause "New" or "Revised" License"](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case 'Boost Software License 1.0': 
            link = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)"
            break;
        case 'Creative Common Zero v1.0 Universal':
            link = "[Creative Common Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/) "
            break;
        case 'Eclipse Public License 2.0':
            link = "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)"
            break;
        case 'GNU Affero General Public License':
            link = "[GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0)"
            break;
        case 'GNU Lesser General Public License v2.1':
            link = "[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-3.0)"
            break;
        case 'Mozilla Public License 2.0':
            link = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)"
            break;
        case 'The Unlicense':
            link = "[The Unlicense](http://unlicense.org/)"
            break;
        case 'No License':
            link = " ";
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    var section = " ";
    
    switch(license) {
        case 'Apache License 2.0': 
            section = "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0) "
            break;
        case 'GNU General Public License v3.0': 
            section = "[GNU General Public License v3.0'](https://www.gnu.org/licenses/gpl-3.0) "
            break;
        case 'MIT License': 
            section = "[MIT License](https://opensource.org/licenses/MIT)"
            break;
        case 'BSD 2-Clause "Simplified" License"':
            section = '[BSD 2-Clause "Simplified" License"](https://opensource.org/licenses/BSD-2-Clause)'
            break;
        case 'BSD 3-Clause "New" or "Revised" License"':
            section = '[BSD 3-Clause "New" or "Revised" License"](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case 'Boost Software License 1.0': 
            section = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)"
            break;
        case 'Creative Common Zero v1.0 Universal':
            section = "[Creative Common Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/) "
            break;
        case 'Eclipse Public License 2.0':
            section = "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)"
            break;
        case 'GNU Affero General Public License':
            section = "[GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0)"
            break;
        case 'GNU Lesser General Public License v2.1':
            section = "[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-3.0)"
            break;
        case 'Mozilla Public License 2.0':
            section = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)"
            break;
        case 'The Unlicense':
            section = "[The Unlicense](http://unlicense.org/)"
            break;
        case 'No License':
            section = " ";
    }
    return section;

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installInstruct, usageInfo, contribGuide, testInstruct, license, github, email }) =>
`# ${title}

## Badges
${renderLicenseBadge(license)}

## Description 
${description}

## Table of Contents
- [Installation Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#installation-instructions)
- [Usage Information](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#usage-information)
- [License](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#license)
- [Badges](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-S.md#badges)
- [Contributions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#how-to-contribute)
- [Testing Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#testing-instructions)
- [Questions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#questions)

## Installation Instructions
${installInstruct}

## Usage Information
${usageInfo}

## License
 This application is covered under the ${renderLicenseLink(license)} license. 
 
## How to Contribute
${contribGuide}

## Testing Instructions
${testInstruct}

## Questions

### Want to see more of my work? 
 [Check out my GitHub:](https://github.com/${github})

### How can you contact me? 
 My email: ${email}
`;

module.exports = generateMarkdown;