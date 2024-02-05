const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a project description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license',
      choices: ['MIT', 'GNU', 'Apache', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution information',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test instructions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email',
    }
  ]);

  // questions()
  // .then((answers) => writeFileAsync('SAMPLEREADME.md', generateMarkdown(answers)))
  // .then(() => console.log('Successfully wrote to README.md'))
  // .catch((err) => console.error(err));

// function to initialize program
const init = async () => {
  //console.log('hi');
  try {
    const answers = await questions();

    await writeFileAsync('./output/README.md', generateMarkdown(answers));

    console.log('Successfully wrote to SAMEPLREADME.md');
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
