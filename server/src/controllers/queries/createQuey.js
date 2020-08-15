import querymodel from "./../../models/query"

const createQuery = async(req, res, next) => {
    try {
        const newQuery = new querymodel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        });
        await  newQuery.save().then(
            () => {
                res.status(201).json({
                    message: 'Query saved successfully!'
                });
            }
        )}
   catch{
            res.status(400).json({
                message: 'Query not saved!',
            });
        }

};

export default createQuery
