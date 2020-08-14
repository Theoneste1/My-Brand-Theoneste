// controllers

import blogmodel from "./../../models/blog"

    const findAllBlogs = (req, res, next) => {
        blogmodel.find().then(
            (blogs) => {
                res.status(200).json(blogs)
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    }

    // controller

    const createBlog = (req, res, next) => {
        const newBlog = new blogmodel({
            topic: req.body.topic,
            content: req.body.content
        });
        newBlog.save().then(
            () => {
                res.status(201).json({
                    message: 'Blog saved successfully!'
                });
            },
        ).catch(
            (error) => {
                res.status(400).json({
                    message: 'Blog not saved!'
                    // error: error
            
                });
            });
    };

    const findOneBlog = (req, res, next) => {
        const blog = blogmodel.findById({
            _id: req.params.id
        }).then(
            (blog) => {
                res.status(200).json(blog);
            }
        ).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
    };

    const upDateBlog = (req, res, next) => {
        const blog = new blogmodel.findById({
            _id: req.params.id,
            topic: req.body.topic,
            content: req.body.content
        });
        blogmodel.updateOne(
            { _id: req.params.id }, blog).then(
                () => {
                    res.status(201).json({
                        message: "blog updated successfully!"
                    });
                }).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
    }
    
    const deleteBlog = (re, res, next) => {
        blogmodel.deleteOne({
            _id: req.params.id
    
        }).then(
            () => {
                res.status(200).json({
                    message: 'Deleted!'
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    }
  

export {createBlog, deleteBlog, findAllBlogs,findOneBlog, upDateBlog }