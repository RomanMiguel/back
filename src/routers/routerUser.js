import { Router } from "express";
import passport from "../utils/passport.js";

const routerUser = Router();

// Signup

routerUser.post("/signup", passport.authenticate( "signup", {failureRedirect:"failSignup"}),
    (req, res) => {
        res.json( { user: req.body.username } )
    }
);

routerUser.post("/failSignup", (req, res) => {
    res.status(400).json( { error: "error al registrarte"})
} );



// Login

routerUser.post("/login", passport.authenticate("login", { failureRedirect: "/failLogin" }),
    (req, res) => {
        res.json( { user: req.body.username} )
    }
)

routerUser.post("/failLogin", (req, res) => {
    res.status(400).json( { error: "error al logearte"})
} );

export default routerUser;