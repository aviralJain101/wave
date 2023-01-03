import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({//to company middleware in mongoose
    name:{
        type:String,
        required:true,
        trim:true
    },
    tags: [{type: String}],
    articleLink: String
},{
    timestamps:true
});




const Company = mongoose.model('Company',companySchema);

module.exports = Company;