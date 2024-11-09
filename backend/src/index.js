import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from 'cookie-parser';

import { connection } from "./DAO/dataBase/connectionMongo.js";

import initializePassport from "./config/passport-config.js";
import passport from "passport";

//Routes
import sessionRouter from "./routes/session-router.js";
import productRouter from "./routes/product-router.js";


connection();

const app= express();
const port=3900;

app.use(cors({
  origin: 'http://localhost:5173',  // Tu frontend
  credentials: true  // Permitir cooki
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true
}));


app.use(cookieParser())

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/session', sessionRouter);
app.use('/api/products', productRouter);

app.listen(port, ()=> console.log("Servidor corriendo en el puerto "+port));