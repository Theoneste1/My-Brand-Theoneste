import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
import chaiHttp from "chai-http";
import { response } from 'express';
chai.use(chaiHttp);

let queryId;
let token;

// bring login here
describe("testing about  login", () => {
    it("should return 200 on success", (done) => {
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
});

describe("testing query", () => {
    it("should create a query", (done) => {
        // /api/queries
        chai.request(app)
            .post(`/api/user/queries`)
            .send({
                firstName: "rereasdaadnsan",
                lastName: "reqlastNamdsae",
                email: "theoneste@gmail.com",
                message: "reqmessagdsadasfe"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(201);
                queryId = response.body.queries._id;
                console.log(`This is query id ${queryId}`);
                done();
            });

    })
    it("should get queries", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/user/queries`)
            .set('Authorization', `${token}` )
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);

                done();
            });
    })

    it("should not get queries", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/user/queries`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);

                done();
            });
    })
    it("should get one query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .get(`/api/user/queries/${queryId}`)
            .set('Authorization', token)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should not create a query with empty field", (done) => {
        // /api/queries
        chai.request(app)
            .post(`/api/user/queries`)
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
            .post(`/api/user/queries`)
            .send({
                lastName: "reqlastName",
                email: "theoneste@gmail.com",
                message: "reqmessage"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })

    it("should delete one query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .delete(`/api/user/queries/${queryId}`)
            .set('Authorization', token)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })

    it("should not delete one query by Id", (done) => {
        // /api/queries
        chai.request(app)
            .delete(`/api/user/queries/${queryId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })


})
