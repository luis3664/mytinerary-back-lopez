import express from 'express';
const routerComments = express.Router();

import commentsControllers from '../controllers/commentsControllers.js';
import passport from '../middlewares/passport.js';

routerComments.post('/', passport.authenticate( 'jwt', {session:false} ), commentsControllers.createComment);
routerComments.get('/', commentsControllers.getAllComments);
routerComments.get('/:id', commentsControllers.getCommentById);
routerComments.put('/:id', passport.authenticate( 'jwt', {session:false} ), commentsControllers.updateCommentById);
routerComments.delete('/:id', passport.authenticate( 'jwt', {session:false} ), commentsControllers.deleteCommentById);

export default routerComments;