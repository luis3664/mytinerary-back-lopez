import express from 'express';
const routerActivities = express.Router();

import activitiesControllers from '../controllers/activitiesControllers.js';

routerActivities.post('/', activitiesControllers.createActivity);
routerActivities.get('/', activitiesControllers.getAllActivities);
routerActivities.get('/:id', activitiesControllers.getActivityById);
routerActivities.put('/:id', activitiesControllers.updateActivityById);
routerActivities.delete('/:id', activitiesControllers.deleteActivityById);

export default routerActivities;