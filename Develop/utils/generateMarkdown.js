// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    const format = {};
    
    switch(license) {
        case 'Apache License 2.0': 
            format = {
                label: 'build',
                message: 'passed',
                color: 'green',
            }
            break;

    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installInstruct, usageInfo, contribGuide, testInstruct, license, github, email}) =>
   

`# ${title}

## Badges

## Description 
${description}

## Table of Contents
- [Installation Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#installation-instructions)
- [Usage Information](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#usage-information)
- [License](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#license)
- [Badges](#https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#badges)
- [Contributions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#how-to-contribute)
- [Testing Instructions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#testing-instructions)
- [Questions](https://github.com/kthames/READMEGenerator/blob/main/Develop/README-sample.md#questions)

## Installation Instructions
${installInstruct}

## Usage Information
${usageInfo}

## License

## How to Contribute
${contribGuide}
## Testing Instructions
${testInstruct}
## Questions
### Want to see more of my work? 
#### My GitHub username: ${github}
### How can you contact me? 
####${email}
`;

module.exports = generateMarkdown;