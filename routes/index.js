import express from 'express';
const router = express.Router();

import userRouter from './users.js' 
import routerCities from './cities.js'
import routerItineraries from './itineraries.js';
import routerActivities from './activities.js';
import routerComments from './comments.js';

// Routers
router.use('/auth', userRouter);
router.use('/cities', routerCities);
router.use('/itineraries', routerItineraries);
router.use('/activities', routerActivities);
router.use('/comments', routerComments);

export default router
