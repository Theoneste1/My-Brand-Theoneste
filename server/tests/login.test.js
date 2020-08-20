const chai = require('chai');
const assert = chai.assert;   // Using Assert style
const expect = chai.expect;  // Using Expect style
const chaiHttp = require("chai-http");
const should = chai.should();  // Using Should style
chai.use(chaiHttp);

c

describe("testing login", () => {
    it("should return 200 on success", () => {
        // /api/user/login
        chai.request(server)
            .post("/api/user/login")
            .send({
            
        })
        
    })
    it("should return success message", () => {
        
    })
})