import { signUp, signIn, getUsers, getUser, updateUser, deleteUser } from '../services/usersServices.js'

const usersControllers = {
    signUp, 
    signIn, 
    getUsers, 
    getUser,
    updateUser, 
    deleteUser 
};

export default usersControllers;