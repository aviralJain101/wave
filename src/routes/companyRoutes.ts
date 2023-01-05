import express from 'express';
import companyController from '../controllers/companyControllers';

const router = express.Router()

//Get list of all the companies
router.get('/company', companyController.getCompanies);

//Get a company by id
router.get('/company/:id', companyController.getCompanyById)

//Create a new company
router.post('/company', companyController.createCompany);

//Delete a company
//TODO : Add a admin auth middleware
router.delete('/company/:id', companyController.deleteCompany)

export default router;