import express from 'express';
const router = express.Router();

import authRouter from './auth.js';
import routerCities from './cities.js';
import routerItineraries from './itineraries.js';
import routerActivities from './activities.js';
import routerComments from './comments.js';
import routerCountries from './contries.js';

// Routers
router.use('/auth', authRouter);
router.use('/cities', routerCities);
router.use('/itineraries', routerItineraries);
router.use('/activities', routerActivities);
router.use('/comments', routerComments);
router.use('/countries', routerCountries);

export default router
