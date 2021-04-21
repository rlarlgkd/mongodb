const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_design', {useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
},{collection: 'users' })
const userModel = mongoose.model("UserModel", userSchema)

const findOneUserByFirstname = (firstName) => {
    userModel.findOne({firstName: firstName}, (err, data) => {
        console.log(data)
    })
}

const findUserByFirstname = (firstName) => {
    userModel.find({firstName: firstName}, (err, data) => {
        console.log(data)
    })
}

const findUserById = (id) => {
    userModel.find({_id: id}, (err,data)=>{
        console.log(data)
    })
}
const findOneUserById = (id) => {
    userModel.findById(id, (err,data)=>{
        console.log(data)
    })
}



const findAllUsers = () => {
    userModel.find((err, data) => {
        console.log(err)
        console.log(data)
    })
}

const deleteUserById = (id) => {
    userModel.remove({_id:id}, (err,status) =>{
console.log(status)
    })
}

const updateUserById = (id, newUserValues) => {
    userModel.update({_id: id},{
        $set: {
            firstName: newUserValues.firstName,
            username: newUserValues.username
        }
    },(err,status)=>{
        console.log(status)
    })
}

const createUser =(newUser) =>{
    userModel.create(newUser, (err,data)=>{
        console.log(data)
    })
}
//findAllUsers();
//findUserByFirstname('Thomas')
//findOneUserByFirstname('Thomas')
//findUserById('6071155a01e85386c27e9135')
//findOneUserById('6071155a01e85386c27e9135')
/*updateUserById('6071155a01e85386c27e9135',{
    firstName: 'Mike',
    username: 'tyson'
})*/
createUser({
    firstName: "Charlie",
    lastName: "Garcia",
    username: "Dorcia",
    password: "rlgkd"
})