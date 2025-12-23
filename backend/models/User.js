import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    role:{
        type:String,
        enum:['seeker','recruiter'],
        required:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/,'Please use a valid email address.'],
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    location:{
        type:String,
        required:true,
        trim:true,
    },
    experience:{
        type:String,
        enum:['fresher','experienced'],
        required:function(){ return this.role==='seeker'; },
    },
    preferredLocation:{
        type:String,
        required:function(){ return this.role==='seeker'; },
        trim:true,
    },
    skills:{
        type:String,
        required:function(){ return this.role==='seeker'; },
        trim:true,
    },
    aadhar:{
        type:String,
        required:false,
        trim:true,
        match:[/^\d{12}$/,'Aadhaar number must be 12 digits.'],
    },
    otp:{
        type:String,
        required:false,
    },
    companyName:{
        type:String,
        required:false,
        trim:true,
    },
    designation:{
        type:String,
        required:false,
        trim:true,
    },
},{timestamps:true});

export default mongoose.model('User',userSchema);