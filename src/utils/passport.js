import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import { UserModel } from "../modelos/user.models.js"
import logger from "../utils/logger.js"
import { sendMailGmail } from "./nodemailer.js";

passport.use("signup", new Strategy( { passReqToCallback: true },

    async (req, username, password, done ) => {
    
        try {
            
            const userExists = await UserModel.findOne( { username: username } );
            
            if (userExists) {
                logger.info("Usuario existe");
                return done(null, false);
            }

            const usuario = req.body
            
            const user = await UserModel.create({
                username: usuario.username,
                password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
                fullname: usuario.fullname,
                address: usuario.address,
                email: usuario.email,
                dni: usuario.dni,
                created_at: new Date()
            });

            sendMailGmail( usuario.username, usuario.fullname, usuario.address, usuario.email, usuario.dni);

            return done(null, user);

        } catch (error) { logger.info('Error passport signup: ', error); }
    }
) );

passport.use( "login", new Strategy( async ( username, password, done ) => {
    try {
    
        const user = await UserModel.findOne( { username: username } );
    
        if (!user) {
            logger.info("Usuario no encontrado!");
            return done(null, false);
        }

        const isValid = bcrypt.compareSync(password, user.password);
        
        if (isValid) {
            return done(null, user);
        } else {
            return done(null, false);
        }

    } catch (error) {
        logger.info(error);
        return done(null, error);
    }

} ) )

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, done);
});

export default passport;