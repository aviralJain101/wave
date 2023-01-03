import express from 'express';

const loaders = require('./loaders');


async function startServer() {

  const app = express();

  await loaders(app);
  const port = process.env.PORT;
  app.listen(port,()=> {
    console.log(`Your server is ready at ${port}`);
  });
}

startServer();