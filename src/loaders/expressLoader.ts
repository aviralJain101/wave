import express from 'express';
import companyRoute from '../routes/companyRoutes';

const expressLoader = async (app: express.Application) => {

    app.get('/status', (req, res) => {
        res.status(200).json({ error: false, message: 'Healthy server!' });
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(express.json())//parse the incoming json data
    
    //include routes here
    app.use(companyRoute);
  
    // ...More middlewares

    // Return the express app
  
    return app
}



module.exports = expressLoader;