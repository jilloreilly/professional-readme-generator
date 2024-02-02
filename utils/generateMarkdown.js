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
  - ${renderLicenseLink(data.license)}
  - [Questions & Contact](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicense(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  - View my GitHub profile here: [${data.github}](https://github.com/${data.github})
  - If you have any additional questions, contact me: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

// Function to set license badge
function setLicense(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// Function to render license link in ToC
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `[License](#License)`
    )
  } else {
    return '' // Return empty string
  }
}

// Function to render license section
function renderLicense(license) {
  if (license !== 'None') {
    return (
      `## License
  This project is licensed under the **${license}** license`
    )
  } else {
    return '' // Return empty string
  }
}
