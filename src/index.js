import express from "express"
import session from "express-session";
import cors from "cors"
import compression from "compression";
import { routerCart, routerProducts, routerUser, routerInfo } from "./routers";
import logger from "./utils/logger";
import "./config/db"

const app = express();

app.set ( "view engine" , "ejs"  );
app.set ( "views"       , "./src/views" );

app.use ( express.json () );
app.use ( express.urlencoded ( {extended: true} ) );
app.use ( cors() );
app.use ( compression() );
app.use ( session ( {
    secret: "secret(1234)",
    cookie: { maxAge: Number(30000) },
    rolling: true,
    resave: true,
    saveUninitialized: true
} ) );

app.use ( '/api/productos'  , routerProducts );
app.use ( '/api/carrito'    , routerCart );
app.use ( '/api/user'       , routerUser );
app.use ( '/api/info'       , routerInfo );

const PORT = process.env.PORT || 8080;

app.listen( PORT , () => logger.info('server started'));
