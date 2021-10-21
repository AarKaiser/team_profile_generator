const Employee = require("./Intern");

class Intern extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.school = school;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern