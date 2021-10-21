const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
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