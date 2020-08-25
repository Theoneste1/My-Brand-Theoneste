import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId

const UserSchema = new Schema({
    id: ObjectId,
    email: String,
    password: String
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
