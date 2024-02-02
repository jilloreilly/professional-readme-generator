// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${setLicense(data.license)}

  ## Description
  ${data.description}

  ## Table of contents:
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions & Contact](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## License 
  ${data.license}

  ## Questions
  ${data.github}

  ${data.email}

`;
}

module.exports = generateMarkdown;

function setLicense(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}
