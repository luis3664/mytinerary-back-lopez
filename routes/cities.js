import express from 'express';
const routerCities = express.Router();

import citiesControllers from '../controllers/citiesControllers.js';

routerCities.post('/', citiesControllers.createCity);
routerCities.get('/', citiesControllers.getAllCities);
routerCities.get('/:id', citiesControllers.getCityById);
routerCities.put('/:id', citiesControllers.updateCityById);
routerCities.delete('/:id', citiesControllers.deleteCityById);

routerCities.post('/all', citiesControllers.createAllCities);


export default routerCities;