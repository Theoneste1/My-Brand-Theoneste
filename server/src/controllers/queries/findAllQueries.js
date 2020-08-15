import querymodel from "./../../models/query"

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

export default findAllQueries
