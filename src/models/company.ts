import mongoose from 'mongoose';

const companySchema: mongoose.Schema = new mongoose.Schema({//to company middleware in mongoose
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


export default mongoose.model('Company', companySchema);