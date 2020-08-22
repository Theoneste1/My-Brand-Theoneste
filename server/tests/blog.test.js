import chai from 'chai';
import app from './../server';
// import {token} from "./login.test"
import { set }  from "./../seeds/admin"
const expect = chai.expect;  // Using Expect style
import chaiHttp from"chai-http";
chai.use(chaiHttp);

let blogId;
let token;


// bring login here
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
});

describe("testing about blogs", () => {
    it("should  get  all blogs", (done) => {
        chai.request(app)
            .get(`/api/user/blogs/`)
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                // blogId = response.body.id
                done();
            });
    })
    describe("testing about blogs", () => {
        it("should  not get  all blogs", (done) => {
            chai.request(app)
                .get(`/api/user/blogs/allBlogs/`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(404);
                    // blogId = response.body.id
                    done();
                });
        })

        it("should  create blog", (done) => {
            chai.request(app)
                .post("/api/user/blogs")
                .set('Authorization', token)
                .send({
                    imageLink: "this is an emage sfdsfsdfagdgsdisdsadsa mine",
                    topic: "Thid idsdjgsjhd ",
                    content: "Backend is not easy kbs contents"
                })
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(201);
                    blogId = response.body.data._id;
                    console.log(` thi is blog id ${blogId}`)
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

        it("should create the comment  by id", (done) => {
            // /api/user/login
            chai.request(app)
                .post(`/api/user/blogs/comment/${blogId}`)
                .send({
                    name: "Irenee",
                    comment: "This is my comment here"
                })
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(200);
                    done();
                });
        })

        it("should update  blog by id", (done) => {
            // /api/user/login
            chai.request(app)
                .patch(`/api/user/blogs/${blogId}`)
                .set('Authorization', `${token}`)
                .send({
                    imageLink: "this is an emage adsa mine",
                    topic: "Thid idsdjgsjhd ",
                    content: "Backend is not easy kbs contents"
                })
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(200);
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

        it("should not be accessed by anauthorized", (done) => {
            chai.request(app)
                .post(`/api/user/blogs`)
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
                .set('Authorization', token)
                .send({
                    imageLink: "",
                    topic: " ",
                    content: ""
                })
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

        it("should not like blog without blog Id", (done) => {
            // /api/user/login
            chai.request(app)
                .post(`/api/user/blogs/like/`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(404);
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

        it("should be able to delete blog by id", (done) => {
            chai.request(app)
                .delete(`/api/user/blogs/${blogId}`)
                .set('Authorization', `${token}`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(204);
                    done();
                });
        })
        it("should not create the comment ,with wrong id", (done) => {
            // /api/user/login
            chai.request(app)
                .post(`/api/user/blogs/comment/${blogId}`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(404);
                    done();
                });
        })

        it("should not like blog with wrong id", (done) => {
            // /api/user/login
            chai.request(app)
                .post(`/api/user/blogs/like/${blogId}`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(404);
                    done();
                });
        })
        it("should not dislike blog with wrong id", (done) => {
            // /api/user/login
            chai.request(app)
                .post(`/api/user/blogs/dislike/${blogId}`)
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response).to.have.status(404);
                    done();
                });
        })
    })
    it("should not be able to update  blog by wrong id", (done) => {
        // /api/user/login
        chai.request(app)
            .patch(`/api/user/blogs/${blogId}`)
            .set('Authorization', `${token}`)
            .send({
                imageLink: "this is an emage adsa mine",
                topic: "Thid idsdjgsjhd ",
                content: "Backend is not easy kbs contents"
            })
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(404);
                done();
            });
    })

})
