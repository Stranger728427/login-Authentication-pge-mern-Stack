import LoginModel from '../models/loginModel.js'; 
import cookie from 'cookie-parser'
class LoginController{
    static createDoc = async (req, res) =>{
     
        try{
            const { name, email, password } = req.body;

            const check = await LoginModel.findOne({email: email})
             console.log(check)
            if(check){
                res.json("exist")
            }
            else{
                const doc = new LoginModel({
                    name: name,
                    email: email,
                    password: password
                })
                const result = await doc.save();
               //console.log(res)
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while creating the user.');
        }
    }

    static loginDoc = async (req,res) =>{
        try{
           const { email, password } = req.body;
           const check = await LoginModel.findOne({email: email, password: password});
           console.log(check)
           if(check){
             res.json('exist');
             const  userId=check._id;
              console.log(`user ka id hai ${userId}`)
              res.json(userId)
           }
           else if(check == null){
            console.log("error nvjknfkjvcfdnkn check")
            res.json('invalid Bad request');
           }
           else{
            res.json('fill the all boxes')
           }
        }
        catch(err){
            console.log(err);
            res.status(500).send('An error occurred while logging in.');
        }
    }
}

export default LoginController;