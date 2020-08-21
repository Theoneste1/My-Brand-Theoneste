import chai from 'chai';
import app from './../server';
import { set } from '../seeds/admin';
const expect = chai.expect;  // Using Expect style
import chaiHttp from"chai-http";
chai.use(chaiHttp);
let blogId = "5f3e582bae5b8535dc0862b3";
let adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6InRoZW9AZ21haWwuY29tIiwiaWF0IjoxNTk3ODQzMjM0LCJleHAiOjE1OTc5Mjk2MzR9.nuR3QLQg5ExXWeUmHcnDJrlz0vWhklaYzlUsACaeGS8";
describe("testing about blogs", () => {
    it("should not be accessed by anauthorized", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs`)
            // .set('token', adminToken),
            .send({
                imageLink: "this is an emage sfdsfsdfagdgsdisdsadsa mine",
                topic: "Thid idsdjgsjhd ",
                content: "Backend is not easy kbs contents"})
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                // token=response.body.token
                done();
            });

    })
    it("should  not create blog", (done) => {
        // /api/user/login
        chai.request(app)
            .post("/api/user/blogs")
            .set('token', "this is wrong token")
            .send({
                imageLink: "this is an emage sfdsfsdfagdgsdisdsadsa mine",
                topic: "Thid idsdjgsjhd ",
                content: "Backend is not easy kbs contents"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });

    })
    it("should  not create blog", (done) => {
        // /api/user/login
        chai.request(app)
            .post("/api/user/blogs")
            .set('token', adminToken)
            .send({
                imageLink: "",
                topic: " ",
                content: ""
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })

    it("should  get blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .get(`/api/user/blogs/${blogId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should  get  all blogs", (done) => {
        // /api/user/login
        chai.request(app)
            .get(`/api/user/blogs/`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })

    it("should create the comment  by id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/comment/${blogId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should not create the comment ,with wrong id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/comment/ahsghasd`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })
    it("should not create the comment  empty id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/comment/`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                done();
            });
    })

    it("should like blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/like/${blogId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should not like blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/like/`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                done();
            });
    })
    it("should not like blog wih wrrong id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/like/hghfghfg`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })
    it("should dislike blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/dislike/${blogId}`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    })
    it("should not dislike blog without  id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/dislike/`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                done();
            });
    })
    it("should not dislike blog with wrong id", (done) => {
        // /api/user/login
        chai.request(app)
            .post(`/api/user/blogs/dislike/sdfsdf`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(400);
                done();
            });
    })

    it("should  delete blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .delete(`/api/user/blogs/${blogId}`)
            .set('token', adminToken)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })
    it("should not delete blog by id", (done) => {
        // /api/user/login
        chai.request(app)
            .delete(`/api/user/blogs/hghjsdjhgsdh`)
            .set('token', adminToken)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(401);
                done();
            });
    })
})
