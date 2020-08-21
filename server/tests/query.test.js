import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
import { token } from "./login.test";
const expect = chai.expect;  // Using Expect style
import chaiHttp from "chai-http";
chai.use(chaiHttp);

let queryId = "5f3760224027d600d4b477b2";

describe("testing query", () => {
    it("should create a query", (done) => {
        // /api/queries
        chai.request(app)
            .post(`/api/queries`)
            .send({
                firstName: "rereasda",
                lastName: "reqlastName",
                email: "theoneste@gmail.com",
                message: "reqmessage"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(201);
                // token=response.body.token
                done();
            });
    })
    it("should not create a query", (done) => {
        // /api/queries
        chai.request(app)
            .post(`/api/queries`)
            .send({
                firstName: "  ",
                lastName: "reqlastName",
                email: "theoneste@gmail.com",
                message: "reqmessage"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                // token=response.body.token
                done();
            });
    })
    it("should not create a query without all fields", (done) => {
        // /api/queries
        chai.request(app)
            .post(`/api/queries`)
            .send({
                lastName: "reqlastName",
                email: "theoneste@gmail.com",
                message: "reqmessage"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                // token=response.body.token
                done();
            });
    })


    it("should not get query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/queries/${queryId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })

    it("should not get query with wrong id", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/queries/sdhjsdhhh`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })

    it("should get query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/queries/${queryId}`)
            .set('Authorization', token)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })

    it("should delete query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .delete(`/api/queries/${queryId}`)
            .set('Authorization', token)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })
})
