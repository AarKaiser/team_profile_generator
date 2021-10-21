
const Intern = require("../lib/Intern");

describe("The Intern Object", () => {
    it("should get me the Intern's Id back if I access the id property of the object created", ()=> {
        const testObj = new Intern("John", 123);
        expect(testObj.id).toBe(123)
    })
})