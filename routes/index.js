import express from 'express';
const router = express.Router();

import userRouter from './users.js' 
import routerCities from './cities.js'

// Routers
router.use('/auth', userRouter);
router.use('/cities', routerCities);

export default router
