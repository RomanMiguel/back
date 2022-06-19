import express from "express"
import session from "express-session";
import mongoStore from "connect-mongo";
import cors from "cors"
import compression from "compression";

import routerCart from "./routers/routerCart.js";
import routerInfo from "./routers/routerInfo.js";
import routerProducts from "./routers/routerProducts.js";
import routerUser from "./routers/routerUser.js";

import passport from "./utils/passport.js";
import logger from "./utils/logger.js";
import "./config/db.js"

const app = express();

app.set ( "view engine" , "ejs"  );
app.set ( "views"       , "./src/views" );
app.use ( express.json () );
app.use ( express.urlencoded ( {extended: true} ) );
app.use ( cors() );
app.use ( compression() );
app.use ( session ( {
    store: mongoStore.create( {
        mongoUrl: process.env.MONGO_URL,
        options: {
            userNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 },
    rolling: true
} ) );

app.use ( '/api/productos'  , routerProducts );
app.use ( '/api/carrito'    , routerCart );
app.use ( '/api/user'       , routerUser );
app.use ( '/api/info'       , routerInfo );

app.use ( passport.initialize () );
app.use ( passport.session () );

const PORT = process.env.PORT || 8080;

app.listen( PORT , () => logger.info('server started'));