// Function to set license badge
function setLicense(license) {
  if (license === 'None') {
    return ``
  } else if (license === 'Apache License 2.0') {
    return `![Static Badge](https://img.shields.io/badge/License-Apache%20License%202.0-blue)`
  } else if (license === 'MIT') {
    return `![Static Badge](https://img.shields.io/badge/License-MIT-blue)`
  } else if (license === 'GNU General Public License v3.0') {
    return `![Static Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue)`
  }
}

// Function to render license link in ToC
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `- [License](#License)`
    )
  } else {
    return `` // Return empty string
  }
}

// Function to render License section
// function renderLicense(license) {
//   if (license !== 'None') {
//     return (
//       `## License
//   This project is licensed under the **${license}** license`
//     )
//   } else {
//     return `` // Return empty string
//   }
// }

function renderLicense(license) {
  if (license === 'Apache License 2.0') {
    return (
      `## License
  This project is licensed under the **${license}** license.
  
  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  <a href='http://www.apache.org/licenses/' target='_blank'> http://www.apache.org/licenses/</a>`
    )
  } else if (license === 'MIT') { 
    return (
      `## License
  This project is licensed under the **${license}** license.
      
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    )
  } else if (license === 'GNU General Public License v3.0') {
    return (
      `## License
  This project is licensed under the **${license}** license.
      
  Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
  <a href='https://www.gnu.org/licenses/gpl-3.0.en.html' target='_blank'>https://www.gnu.org/licenses/gpl-3.0.en.html</a>`
    )
  } else if (license === 'None') {
    return `` // Return empty string
  }
}

// Function to render Tests link in ToC
function renderTestsLink(tests) {
  if (tests !== '') {
    return (
      `- [Tests](#Tests)`
    )
  } else {
    return `` // Return empty string
  }
}

// Function to render Tests section
function renderTests(tests) {
  if (tests !== '') {
    return (
      `## Tests
  ${tests}`
    )
  } else {
    return `` // Return empty string
  }
}

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
  ${renderTestsLink(data.tests)}
  ${renderLicenseLink(data.license)}
  - [Questions & Contact](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicense(data.license)}
  
  ## Contributing
  ${data.contributing}

  ${renderTests(data.tests)}
  
  ## Questions
  - View my GitHub profile here: [${data.github}](https://github.com/${data.github})
  - If you have any additional questions, contact me: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
