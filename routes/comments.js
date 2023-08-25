import express from 'express';
const routerComments = express.Router();

import commentsControllers from '../controllers/commentsControllers.js';

routerComments.post('/', commentsControllers.createComment);
routerComments.get('/', commentsControllers.getAllCommentsByItinerary);
routerComments.get('/:id', commentsControllers.getCommentById);
routerComments.put('/:id', commentsControllers.updateCommentById);
routerComments.delete('/:id', commentsControllers.deleteCommentById);

export default routerComments;