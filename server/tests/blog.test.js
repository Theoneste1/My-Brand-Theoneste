const chai = require('chai');
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

let adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6InRoZW9AZ21haWwuY29tIiwiaWF0IjoxNTk3ODQzMjM0LCJleHAiOjE1OTc5Mjk2MzR9.nuR3QLQg5ExXWeUmHcnDJrlz0vWhklaYzlUsACaeGS8";
describe("testing about blogs", () => {
    it("should return 404 on, for anauthorized access", (done) => {
        // /api/user/login
        chai.request(app)
            .post("/api/user/blog")
            // .set('token', adminToken),
            .send({
                image: "this is an emage sfdsfsdfagdgsdisdsadsa mine",
                topic: "Thid idsdjgsjhd ",
                content: "Backend is not easy kbs contents"})
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                // token=response.body.token
                done();
            });

    })
    it("should return 201 on,when blog is successfully created", (done) => {
        // /api/user/login
        chai.request(app)
            .post("/api/user/blog")
            .set('Athorization', `bearer ${adminToken}`)
            .send({
                imageLink: "this is an emage sfdsfsdfagdgsdisdsadsa mine",
                topic: "Thid idsdjgsjhd ",
                content: "Backend is not easy kbs contents"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                // token=response.body.token
                done();
            });

    })
})
