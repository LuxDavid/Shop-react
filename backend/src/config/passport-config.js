import passport from 'passport';
import passportJWT from 'passport-jwt';
import GitHubStrategy from 'passport-github2'
import local from 'passport-local';

import { userModel } from '../DAO/models/userModel.js';
import { createHash, isValidPassword, generateToken } from '../utils.js';
import { DateTime } from "luxon";

const LocalStrategy = local.Strategy;
const JWTStrategy = passportJWT.Strategy;

const cookieExtractor = req => {
    let token = (req?.cookies) ? req.cookies['cookieUS'] : null

    if(!token){
        token= req?.headers?.token
    }
    return token
}

const initializePassport = () => {

 //----------------------------------AUTH----------------------------------------------------------------


 passport.use('current', new JWTStrategy({
    secretOrKey: "SECRET",
    jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([cookieExtractor])
}, (jwt_payload, done) => {
    return done(null, jwt_payload)
}));

    //--------------------------------------GITHUB------------------------------------------------------------

    // passport.use('github', new GitHubStrategy({
    //     clientID: CLIENTID,
    //     clientSecret: CLIENTSECRET,
    //     callbackURL: CALLBACKURL
    // }, async (accessToken, refreshToken, profile, done) => {

    //     try {
    //         let user = await userModel.findOne({ email: profile._json.email })
    //         if (!user) {
    //              user = {
    //                 name: profile._json.name,
    //                 last_name: 'Last name Github',
    //                 email: profile._json.email,
    //                 age: 1,
    //                 password: 'Pasword Git hub'
    //             }

    //             const result= await userModel.create(user);
    //             user._id = result._id
    //         }

    //         const token = generateToken(user);
    //         user.token = token

    //         user.last_connection= DateTime.now()

    //         await UserRepository.updateUser(user._id, user);

    //         return done(null, user)

    //     } catch (error) {
    //         return done('Error to login with github ' + error)
    //     }
    // }));

     //--------------------------------------GOOGLE------------------------------------------------------------

    //--------------------------------------------------------------------------------------------------
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    //--------------------------------------------------------------------------------------------------
    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id)
        done(null, user)
    })

}

export default initializePassport