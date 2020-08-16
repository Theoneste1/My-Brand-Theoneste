// import './node_modules/regenerator-runtime/runtime'
import querymodel from "../models/queryModel"

// create a query
const createQuery = async (req, res, next) => {
    try {
        const newQuery = new querymodel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        });
        await newQuery.save().then(
            () => {
                res.status(201).json({
                    message: 'Query saved successfully!'
                });
            }
        )
    }
    catch{
        res.status(400).json({
            message: 'Query not saved!',
        });
    }
};

// find all queries
const findAllQueries = (req, res, next) => {
    querymodel.find().then(
        (queries) => {
            res.status(200).json(queries)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

// find one query
const findOneQuery = (req, res, next) => {
    querymodel.findById({
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

// delete a query
const deleteQuery = async (req, res, next) => {
    try {
        await querymodel.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch{
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    }
}

export {createQuery, findAllQueries, findOneQuery, deleteQuery}
