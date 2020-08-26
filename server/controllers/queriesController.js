// import './node_modules/regenerator-runtime/runtime'
import 'regenerator-runtime/runtime'
import querymodel from "../models/queryModel"

// create a query
const createQuery = async (req, res) => {
    try {
        const newQuery = new querymodel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        });
        await newQuery.save().then(() => {
               return res.status(201).send({queries:newQuery});
            })
    }
    catch{
       return res.status(400).send({status:400,message: 'Query not saved!'});
    }
};

// find all queries
const findAllQueries = (req, res) => {
    querymodel.find().then((queries) => {
          return  res.status(200).send({ status: 200, queries: queries })
        } ).catch( (error) => {
           return res.status(401).send({status:401,error: error});
        });
}

// find one query
const findOneQuery = (req, res) => {
    querymodel.findById({ _id: req.params.id}).then((query) => {
          return  res.status(200).send({status:200, queries:query});
        }).catch((error) => {
          return  res.status(401).send({status:401, error: error });
        }
    );
};

// delete a query
const deleteQuery = async (req, res) => {
    try {
        await querymodel.deleteOne({ _id: req.params.id })
       return  res.status(200).send({ status: 200, message:"Qwery deleted successfylly"})
    } catch{(error) => {
         return  res.status(404).send({status:404,error: error});
        }
    }
}
export {createQuery, findAllQueries, findOneQuery, deleteQuery}
