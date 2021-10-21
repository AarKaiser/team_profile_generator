const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const storeEmployee = [];

const managerQuestions = [
  {
    type: "input",
    name: "teammanagername",
    message: "Please enter the name of your team manager:",
  },
  {
    type: "input",
    name: "teammanagerid",
    message: "Please enter team manager Employee ID:",
  },
  {
    type: "input",
    name: "teammanageremail",
    message: "Please enter team manager email address:",
  },
  {
    type: "input",
    name: "officenumber",
    message: "Please enter office number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineername",
    message: "Please enter engineer name:",
  },
  {
    type: "input",
    name: "engineerid",
    message: "Please enter engineer Employee ID:",
  },
  {
    type: "input",
    name: "engineeremail",
    message: "Please enter engineer email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter engineer Github:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internname",
    message: "Please enter intern name:",
  },
  {
    type: "input",
    name: "internid",
    message: "Please enter intern Employee ID:",
  },
  {
    type: "input",
    name: "internemail",
    message: "Please enter intern email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter intern Educational Instituion:",
  },
];

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add new members?",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then(({ choice }) => {
      if (choice == "Engineer") {
        inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const newEngineer = new Engineer(
            engineerAnswers.engineername,
            engineerAnswers.engineerid,
            engineerAnswers.engineeremail,
            engineerAnswers.github
          );
          storeEmployee.push(newEngineer);
          mainMenu();
        });
      } else if (choice == "Intern") {
        inquirer.prompt(internQuestions).then((internAnswers) => {
          const newIntern = new Intern(
            internAnswers.internname,
            internAnswers.internid,
            internAnswers.internemail,
            internAnswers.school
          );
          storeEmployee.push(newIntern);
          mainMenu();
        });
      } else {
        //create the HTML format and then fs.writeFile the new HTML file
        const htmlTemplate = generateHTML(storeEmployee);
        fs.writeFileSync("team.html", htmlTemplate);
        console.log("Your Team HTML file has been created");
      }
    });
}

function startApp() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const newManager = new Manager(
      managerAnswers.teammanagername,
      managerAnswers.teammanagerid,
      managerAnswers.teammanageremail,
      managerAnswers.officenumber
    );
    storeEmployee.push(newManager);
    mainMenu();
  });
}

startApp();

//make the prompter work properly
//add the manager
// add and employee and ask the user if they want to add another

//send the team data into the generateHTML
// loop the data to make the cards

// implement the classes to the mix

//testing

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// // Constructor function called 'Developer' that takes in 'name' and 'tech'
// // Includes a method called 'introduction()'
// function Developer(name, tech) {
//     this.name = name;
//     this.tech = tech;
//     this.introduction = () => {
//       console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
//     };
//   }

//   // Creates a new object using the 'Developer' constructor
//   const rita = new Developer('Rita', 'JavaScript');

//   // Calls the 'introduction()' method on the new object
//   rita.introduction();

//   // Array.prototype.forEach()
// const myArray = [2, 4, 6, 8];

// myArray.forEach((num) => console.log(num)
