import mongoose from "mongoose"

const loginSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String}
})

const LoginModel = mongoose.model('loginCollection', loginSchema);

export default LoginModel