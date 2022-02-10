const mongoose =require('mongoose');
const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');


const userinfoSchema =new mongoose.Schema({
    name:{

        type:String,
        required:true,
        maxlength:20,
        minlength:5,
        
    },
    email:{
        type:String,
        minlength:5,
        maxlength:255,
        required:true,
        uniqui:true

    },
    //for password more complixy use pakage 
    password:
    {
        type:String,
        required:true,
        maxlength:255,
        minlength:5,
        },

});

userSchema.methods.generateAuthToken=function(){
  const token = jwt.sign({_id:this.id},config.get('jwttokenkey'));//send secrate code to server
  return token;

}

const UserUpdate =mongoose.model('UserUpdate',userinfoSchema);

function validateUser(userupdate){
    const schema =Joi.object({
        name: Joi.string().min(5).max(20).required(),
        email: Joi.string().min(5).max(255).required(),
        password:Joi.string().min(5).max(20).required(),


    });
    return validate = schema.validate(userupdate);

}

exports.User=User;
exports.validate=validateUser;

