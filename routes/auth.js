import express from 'express';
import { signUpSchema } from '../validators/SignUpUser.js';
import { signInSchema } from '../validators/SignInUser.js';
import validator from '../middlewares/validator.js';
import usersControllers from '../controllers/usersController.js';
import { emailExistsValidator } from '../middlewares/emailExistsValidator.js';
import passport from '../middlewares/passport.js';

const authRouter = express.Router();

authRouter.post('/up', validator(signUpSchema), emailExistsValidator, usersControllers.signUp);
authRouter.post('/in', validator(signInSchema), usersControllers.signIn);
// authRouter.get('/users', passport.authenticate( 'jwt', {session:false} ), usersControllers.getUsers); Ver si es necesario
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ), usersControllers.getUser);
authRouter.put('/token', passport.authenticate( 'jwt', {session:false} ), usersControllers.updateUser);
authRouter.delete('/token', passport.authenticate( 'jwt', {session:false} ), usersControllers.deleteUser);

export default authRouter
