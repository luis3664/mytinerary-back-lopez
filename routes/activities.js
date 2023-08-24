import express from 'express';
const routerCities = express.Router();

import activitiesControllers from '../controllers/activitiesControllers.js';

routerCities.post('/', activitiesControllers.createActivity);
routerCities.get('/', activitiesControllers.getAllActivitiesByItinerary);
routerCities.get('/:id', activitiesControllers.getActivityById);
routerCities.put('/:id', activitiesControllers.updateActivityById);
routerCities.put('/:id', activitiesControllers.deleteActivityById);

export default routerActivities;