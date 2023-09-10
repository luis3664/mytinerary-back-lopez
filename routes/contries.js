import express from 'express';
const routerCountries = express.Router();

import countriesControllers from '../controllers/countriesControllers.js';
import passport from '../middlewares/passport.js';

routerCountries.post('/', passport.authenticate( 'jwt', {session:false} ), countriesControllers.createAllCountries);
routerCountries.get('/', countriesControllers.getAllCountries);

export default routerCountries;