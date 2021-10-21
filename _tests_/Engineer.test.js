const Engineer = require("../lib/Engineer");

describe("The Engineer Object", () => {
    it("should get me the Engineer's Name back if I run getName()", ()=> {
        const testObj = new Engineer ("John");
        expect(testObj.getName()).toBe("John")
    })
})