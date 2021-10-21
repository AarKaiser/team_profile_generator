const Manager = require("../lib/Manager");

describe("The Manager Object", () => {
    it("should get me the Manager's role back if I run getRole()", ()=> {
        const testObj = new Manager();
        expect(testObj.getRole()).toBe("Manager")
    })
})