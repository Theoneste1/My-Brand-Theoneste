import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
import chaiHttp from "chai-http";
chai.use(chaiHttp);

export let token;
describe("testing login", () => {
    it("should return 200 on success", (done) => {
        // /api/user/login
        chai.request(app)
            .post("/api/user/login")
            .send({
                email: "theo@gmail.com",
                password:"theo"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                token = response.body.token;
                done();
            });

    })
    it("should return 400 on someone who is not admin", (done) => {
        chai.request(app)
            .post("/api/user/login")
            .send({
                email: "theoneste@gmail.com",
                password: "theo"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                // token=response.body.token
                done();
            });

    })
    it("should return 400 on non inputes", (done) => {
        chai.request(app)
            .post("/api/user/login")
            .send({
                email: "thhei",
                password: "tehshhas"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });

    })
})
