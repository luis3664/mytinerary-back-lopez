import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from '../models/User.js'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const functionPassport = async (payload, next) => {
    try {
        const user = await User.findById(payload.id);

        if (!user) {
            throw new Error("No user exists with this id")
        };

        next(null, user);
    } catch (err) {
        next(err, null);
    }
}

export default passport.use(new Strategy(options, functionPassport))