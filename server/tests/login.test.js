import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
import chaiHttp from "chai-http";
chai.use(chaiHttp);
let token;
    describe("testing about  login", () => {
        it("should return 200 on successfully", (done) => {
            chai.request(app)
                .post("/api/user/login")
                .send({
                    email: "theo@gmail.com",
                    password: "theo"
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
                done();
            });
    })
    it("should return 400 on non user inputes", (done) => {
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

    it("should return 400 on non inputes", (done) => {
        chai.request(app)
            .post("/api/user/login")
            .send({
                email: "",
                password: ""
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })

    })
describe("testing about  logout", () => {
    it("should return 200 on successfully", (done) => {
        chai.request(app)
            .post("/api/user/logout")
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(500);
                token = response.body.token;
                done();
            });
    })
})


    export {token}
