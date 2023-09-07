import User from '../models/User.js';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function signUp(req, res, next) {
    try {
        let newUser = { ...req.body };

        const pwdHash = bcrypt.hashSync(req.body.password, 10);

        newUser.password = pwdHash;

        newUser = await User.create(newUser);

        let userData = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            photo: newUser.photo
        }

        const token = Jwt.sign({ id: newUser._id, name: newUser.firstName + ' ' + newUser.lastName }, process.env.SECRET_KEY, { expiresIn: '2h' })

        return res.json({
            success: true,
            token: token,
            userData: userData
        });
    } catch (err) {
        next(err);
    };
};

export async function signIn(req, res, next) {
    try {

        const { mail, password } = req.body

        const userInDB = await User.findOne({ mail: mail })

        if (!userInDB) {
            throw new Error("There is no user with that email.")
        }

        let passwordValidated = bcrypt.compareSync(password, userInDB.password)

        if (!passwordValidated) {
            throw new Error("The email/password is incorrect")
        }

        let userData = {
            firstName: userInDB.firstName,
            lastName: userInDB.lastName,
            photo: userInDB.photo
        }

        const token = Jwt.sign({ id: userInDB._id, name: userInDB.firstName + ' ' + userInDB.lastName }, process.env.SECRET_KEY, { expiresIn: '2h' })

        return res.json({
            success: true,
            token: token,
            userData: userData
        })

    } catch (err) {
        next(err)
    }
};

export async function getUsers(req, res, next) {
    try {
        const users = await User.find();

        res.json({
            success: true,
            response: users,
        })
    } catch (err) {
        next(err);
    }
};

export async function getUser(req, res, next) {
    let user;
    const { _id } = req.user;

    try {
        user = await User.findById(_id).populate({
            path: 'likes'
        });

        res.json({
            success: true,
            response: user
        });
    } catch (err) {
        next(err);
    };
};

export async function updateUser(req, res, next) {
    // Falta este, tema la clave complicado
};

export async function deleteUser(req, res, next) {
    let userDeleted;
    const { _id } = req.user;

    try {
        userDeleted = await User.findByIdAndDelete(_id);

        res.json({
            success: true,
            response: userDeleted
        });
    } catch (err) {
        next(err);
    };
};