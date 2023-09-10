import express from 'express';
const routerCities = express.Router();

import citiesControllers from '../controllers/citiesControllers.js';
import passport from '../middlewares/passport.js';

routerCities.post('/', passport.authenticate( 'jwt', {session:false} ), citiesControllers.createCity);
routerCities.get('/', citiesControllers.getAllCities);
routerCities.get('/:id', citiesControllers.getCityById);
routerCities.put('/:id', passport.authenticate( 'jwt', {session:false} ), citiesControllers.updateCityById);
routerCities.delete('/:id', passport.authenticate( 'jwt', {session:false} ), citiesControllers.deleteCityById);

// routerCities.post('/all', passport.authenticate( 'jwt', {session:false} ), citiesControllers.createAllCities);


export default routerCities;