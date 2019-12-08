// Dependencies
// ===============================================================
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./generateHTML");

// The CLI, with repeating questions if the user wants to continue adding employees
const getInfo = async (info = []) => {
  const prompts = [
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email"
    },
    {
      type: "number",
      message: "What is their ID?",
      name: "id"
    },
    {
      type: "input",
      message: "Are they an engineer, intern, or manager?",
      name: "role"
    },
    {
      type: "input",
      message: "If an engineer, enter their GitHub username. If an intern, enter their school. If a manager, enter their office number.",
      name: "roleInfo"
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "confirm",
      default: true
    }
  ];

  const { confirm, ...employeeInfo } = await inquirer.prompt(prompts);
  const newEmployee = [...info, employeeInfo];
  return confirm ? getInfo(newEmployee) : newEmployee;
};

// This function will acquire all the employee info from the getInfo() function, put that information into a string to send back to generateHTML.js, which will be then give the final HTML code to be written into an HTML file
async function main() {
  // Grab all employee info
  const employees = await getInfo();

  // Create a new employee array to put all the employees in the proper constructors
  const newEmployees = [];
  employees.forEach(element => {
    if (element.role === "engineer") {
      const engineer = new Engineer(element.name, element.id, element.email, element.roleInfo);
      newEmployees.push(engineer);
    } else if (element.role === "intern") {
      const intern = new Intern(element.name, element.id, element.email, element.roleInfo);
      newEmployees.push(intern);
    } else if (element.role === "manager") {
      const manager = new Manager(element.name, element.id, element.email, element.roleInfo);
      newEmployees.push(manager);
    }
  });

  // Create a cards for each employee using template literal and string (haha pun intended) them all together
  let cards = "";
  for (let i = 0; i < newEmployees.length; i++) {
    
    const newCard = `const divCard${i} = $("<div>");
      const divCardHead${i} = $("<div>");
      const h4El${i} = $("<h4>");
      const h5El${i} = $("<h5>");
      const iEl${i} = $("<i>");
      const divCardBody${i} = $("<div>");
      const divSubCard${i} = $("<div>");
      const ulEl${i} = $("<ul>");
      const idEl${i} = $("<li>");
      const emailEl${i} = $("<li>");
      const emailA${i} = $("<a>");
      const infoEl${i} = $("<li>");
      const gitHubA${i} = $("<a>");

      divCard${i}.attr("class", "card");
      divCardHead${i}.attr("class", "card-header");
      divCardBody${i}.attr("class", "card-body");
      divSubCard${i}.attr("class", "card sub-card");
      ulEl${i}.attr("class", "list-group list-group-flush");
      idEl${i}.attr("class", "list-group-item");
      emailEl${i}.attr("class", "list-group-item");
      emailA${i}.attr("href", "mailto: ${newEmployees[i].getEmail()}");
      infoEl${i}.attr("class", "list-group-item");

      if ("${newEmployees[i].getRole()}" === "Engineer") {
          iEl${i}.attr("class", "fas fa-glasses");
      } else if ("${newEmployees[i].getRole()}" === "Intern") {
          iEl${i}.attr("class", "fas fa-user-graduate");
      } else if ("${newEmployees[i].getRole()}" === "Manager") {
          iEl${i}.attr("class", "fas fa-mug-hot");
      };

      h4El${i}.text("${newEmployees[i].getName()}");
      h5El${i}.text(" ${newEmployees[i].getRole()}");
      idEl${i}.text("ID: ${newEmployees[i].getId()}");
      emailEl${i}.text("Email: ");
      emailA${i}.text("${newEmployees[i].getEmail()}");

      if ("${newEmployees[i].getRole()}" === "Engineer") {
          infoEl${i}.text("GitHub: ");
          gitHubA${i}.attr("href", "https://github.com/${newEmployees[i].github}/");
          gitHubA${i}.text("${newEmployees[i].github}");
          infoEl${i}.append(gitHubA${i});
      } else if ("${newEmployees[i].getRole()}" === "Intern") {
          infoEl${i}.text("School: ${newEmployees[i].school}");
      } else if ("${newEmployees[i].getRole()}" === "Manager") {
          infoEl${i}.text("Office number: ${newEmployees[i].officeNumber}");
      };

      container.append(divCard${i});
      divCard${i}.append(divCardHead${i});
      divCard${i}.append(divCardBody${i});
      divCardHead${i}.append(h4El${i});
      divCardHead${i}.append(h5El${i});
      h5El${i}.prepend(iEl${i});
      divCardBody${i}.append(divSubCard${i});
      divSubCard${i}.append(ulEl${i});
      ulEl${i}.append(idEl${i});
      ulEl${i}.append(emailEl${i});
      emailEl${i}.append(emailA${i});
      ulEl${i}.append(infoEl${i});`

      cards += newCard;
  }

  // Write the HTML file with the team profile
  fs.writeFile("./output/team.html", generateHTML(cards), (err) => {
    if (err) throw err;
    console.log("Done!");
  });

};

main();