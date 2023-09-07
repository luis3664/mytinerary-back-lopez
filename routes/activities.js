import express from 'express';
const routerActivities = express.Router();

import activitiesControllers from '../controllers/activitiesControllers.js';
import passport from '../middlewares/passport.js';

routerActivities.post('/', passport.authenticate( 'jwt', {session:false} ), activitiesControllers.createActivity);
routerActivities.get('/', activitiesControllers.getAllActivities);
routerActivities.get('/:id', activitiesControllers.getActivityById);
routerActivities.put('/:id', passport.authenticate( 'jwt', {session:false} ), activitiesControllers.updateActivityById);
routerActivities.delete('/:id', passport.authenticate( 'jwt', {session:false} ), activitiesControllers.deleteActivityById);

export default routerActivities;