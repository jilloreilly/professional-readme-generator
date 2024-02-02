// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${setLicense(data.license)};

## Description

${data.description}

## Table of contents
[Installation](#Installation)

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
    return ``// render license badge here, replace apache with ${license}
  }
}
