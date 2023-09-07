import express from 'express';
const router = express.Router();

import authRouter from './auth.js';
import routerCities from './cities.js';
import routerItineraries from './itineraries.js';
import routerActivities from './activities.js';
import routerComments from './comments.js';

// Routers
router.use('/auth', authRouter);
router.use('/cities', routerCities);
router.use('/itineraries', routerItineraries);
router.use('/activities', routerActivities);
router.use('/comments', routerComments);

export default router
