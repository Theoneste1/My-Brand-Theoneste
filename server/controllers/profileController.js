// controllers
// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import profileModel from "../models/profileModel"

// controller, create one profile
const createProfile = (req, res, next) => {
    const newProfile = new profileModel({
        picture: req.body.picture,
        title: req.body.title,
        description: req.body.description,
        skills:req.body.skills
    });
    newProfile.save().then(() => {
        res.status(201).send({ status: 201, message: "Profile created successfully" })
        }).catch((error) => {
            res.status(400).send({status: 400, error: error});
        });
};

// find all Profiles
const findAllProfiles = (req, res, next) => {
    profileModel.find().then((Profiles) => {
            res.status(200).send({ status: 200, message:Profiles })
        } ).catch((error)=> {
            res.status(400).send({status:400, error: error});
    });
}

// update one Profile
const upDateProfile = (req, res, next) => {
    profileModel.findById({ _id: req.params.id }).then((Profile) => {
            if (req.body.picture) {Profile.picture = req.body.picture }
            if (req.body.title) { Profile.title = req.body.title }
            if (req.body.description) { Profile.description = req.body.description }
            if (req.body.skills) { Profile.skills = req.body.skills}
            Profile.save()
            res.send({ status: 200, message: "profile updated successfully" })
        }).catch((error) => {
                res.status(404).send({status: 404,error: error });
        })
}
            
// dele one Profile
const deleteProfile = async (req, res, next) => {
    try {
        await profileModel.deleteOne({ _id: req.params.id })
        res.status(204).send({ status: 204, message: "User profile deleted successfully" })
    } catch{(error) => {
            res.status(404).send({status: 404, error: "Profile deleted"});
        }}
}

export { createProfile, deleteProfile, findAllProfiles, upDateProfile }
