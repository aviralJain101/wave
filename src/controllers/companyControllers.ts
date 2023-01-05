import express from 'express'
import Company from '../models/company'

var getCompanies = async function(req: express.Request, res: express.Response) {
    try{
        const companies = await Company.find();
        res.send(companies);
    }catch(e){
        res.status(404).send(e);
    }
}

var getCompanyById = async function(req: express.Request, res: express.Response){
    const _id = req.params.id;
    try{
        const company = await Company.findById(_id);
        if(!company){
            return res.status(404).send();
        }
        res.send(company);
    }catch(e) {
        res.send(404).send(e);
    }
}

var createCompany = async function(req: express.Request, res: express.Response) {
    try{
        console.log(req.body);
        const company = new Company(req.body);
        console.log(company);
        await company.save();
        res.send(company);
    }catch(e) {
        res.status(400).send(e);
    }
}

var deleteCompany = async function(req: express.Request, res: express.Response){
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
}

export default {
    getCompanies,
    createCompany,
    deleteCompany,
    getCompanyById
}