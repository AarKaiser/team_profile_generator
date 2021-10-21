const Employee = require("../lib/Employee");

describe("The Employee Objects", () => {
    it("should create an object when I initialize new Employee", ()=> {
        const testObj = new Employee();
        expect(typeof(testObj)).toBe("object")
    })

    it("should get me the Employee role back if I run getRole()", ()=> {
        const testObj = new Employee();
        expect(testObj.getRole()).toBe("Employee")
    })

    it("should get me the Employee's Name back if I run getName()", ()=> {
        const testObj = new Employee("John");
        expect(testObj.getName()).toBe("John")
    })

    it("should get me the Employee's Name back if I access the name property of the object created", ()=> {
        const testObj = new Employee("John");
        expect(testObj.name).toBe("John")
    })

    it("should get me the Employee's Id back if I access the id property of the object created", ()=> {
        const testObj = new Employee("John", 123);
        expect(testObj.id).toBe(123)
    })
})