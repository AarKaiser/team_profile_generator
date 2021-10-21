const {renderManager} = require("./renderManager");
const {renderEngineer} = require("./renderEngineer");
const {renderIntern} = require("./renderIntern");

function generateEmployee(data) {
    let cardTemplate = ``
    data.forEach(index => {
      if(index.getRole() == "Manager"){
        cardTemplate += renderManager(index)
      }
      if(index.getRole() == "Engineer"){
        cardTemplate += renderEngineer(index)
      }
      if(index.getRole() == "Intern"){
        cardTemplate += renderIntern(index)
      }
    })
    return cardTemplate
  }

  module.exports = {generateEmployee};