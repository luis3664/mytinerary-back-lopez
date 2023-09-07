import express from 'express';
const routerItineraries = express.Router();

import itinerariesControllers from '../controllers/itinerariesControllers.js';
import passport from '../middlewares/passport.js';

routerItineraries.post('/', passport.authenticate( 'jwt', {session:false} ), itinerariesControllers.createItinerary);
routerItineraries.get('/', itinerariesControllers.getAllItineraries);
routerItineraries.get('/:id', itinerariesControllers.getItineraryById);
routerItineraries.put('/:id', passport.authenticate( 'jwt', {session:false} ), itinerariesControllers.updateItineraryById);
routerItineraries.delete('/:id', passport.authenticate( 'jwt', {session:false} ), itinerariesControllers.deleteItineraryById);

export default routerItineraries;