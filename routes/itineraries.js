import express from 'express';
const routerItineraries = express.Router();

import itinerariesControllers from '../controllers/itinerariesControllers.js';

routerItineraries.post('/', itinerariesControllers.createItinerary);
routerItineraries.get('/', itinerariesControllers.getAllItineraries);
routerItineraries.get('/:id', itinerariesControllers.getItineraryById);
routerItineraries.put('/:id', itinerariesControllers.updateItineraryById);
routerItineraries.delete('/:id', itinerariesControllers.deleteItineraryById);

export default routerItineraries;