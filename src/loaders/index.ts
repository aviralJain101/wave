import express from 'express';
const expressLoader = require('./expressLoader');
const mongooseLoader = require('./mongooseLoader');

const loader = async (expressApp: express.Application) => {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Initialized');

  await expressLoader(expressApp);
  console.log('Express Initialized');

  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
}

module.exports = loader;