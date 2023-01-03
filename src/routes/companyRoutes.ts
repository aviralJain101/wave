import express from 'express';
const Company = require('../models/company')

const router = express.Router()

//Get list of all the companies
router.get('/company', async(req,res)=>{
    try{
        const companies = await Company.findAll();
        res.send(companies);
    }catch(e){
        res.status(404).send(e);
    }
})

//Create a new company
router.post('/company', async(req, res) => {
    try{
        console.log(req.body);
        const company = new Company(req.body);
        console.log(company);
        await company.save();
        res.send(company);
    }catch(e) {
        res.status(400).send(e);
    }
})

//Delete a company
//TODO : Add a admin auth middleware
router.delete('/company/:id', async(req, res) => {
    const _id = req.params.id;
    try{
        const company = await Company.findByIdAndDelete(_id);
        if(!company){
            return res.status(404).send();
        }
        res.send();
    }catch(e){
        res.status(500).send(e);
    }
})

export default router;