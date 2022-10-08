// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname 
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration Module
import { Secret } from "../config/config.js";

// Import Router
import indexRouter from './routes/index.route.server.js';

// instantiate app-server
const app = express();

// setup ViewEngine EJS
app.set('views', path.join(__dirname,'/views')); // Join views to the directory path starting at root/app/app.js
app.set('view engine', 'ejs'); // sets the name view engine with ejs

app.use(logger('dev')); // Logger, used to log
app.use(express.json()); // Middleware of the code that recognizes incoming request as a JSON Object.
app.use(express.urlencoded({ extended: false})); // same are .json, but this is for strings and arrays.
app.use(cookieParser()); // Just to get cookies
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);

// // run app
// app.listen(3000);

// console.log('Server running at http://localhost:3000');

export default app;