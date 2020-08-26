import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
import chaiHttp from "chai-http";
chai.use(chaiHttp);
let profileId;

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


describe("testing about  profile", () => {
    it("should return 200 find all users profile", (done) => {
        chai.request(app)
            .get("/api/user/profile")
            .set("Authorization", token)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should return 201 create user profile", (done) => {
        chai.request(app)
            .post("/api/user/profile")
            .set("Authorization",token)
            .send({
                picture: "this is picture",
                title: "It is my picture here",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(201);
                profileId = response.body.data._id;
                done();
            });
    })

    it("should not create a profile, with empty fields", (done) => {
        chai.request(app)
            .post("/api/user/profile")
            .set("Authorization", token)
            .send({
                picture: "this is picture",
                title: " ",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })
    it("should be an authorised, since there is not token", (done) => {
        chai.request(app)
            .post("/api/user/profile")
            .send({
                picture: "this is picture",
                title: "This is title ",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })

    it("should be to update profile since, there is token", (done) => {
        chai.request(app)
            .patch(`/api/user/profile/${profileId}`)
            .set("Authorization", token)
            .send({
                picture: "this is picture",
                title: "This is title ",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })

    it("should not be able to update profile because of no token", (done) => {
        chai.request(app)
            .patch(`/api/user/profile/${profileId}`)
            .send({
                picture: "this is picturase",
                title: "This is title ",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })
    it("should not be able to delete profile because of no token", (done) => {
        chai.request(app)
            .delete(`/api/user/profile/${profileId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })
    it("should  be able to delete profile because of  token is there", (done) => {
        chai.request(app)
            .delete(`/api/user/profile/${profileId}`)
            .set("Authorization",token)
            .send({
                picture: "this is picture",
                title: "This is title ",
                description: "I don't have any description",
                skills: "Python, js and linux"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(204);
                done();
            });
    })
})
