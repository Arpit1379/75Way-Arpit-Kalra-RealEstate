import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import console = require('console');
import {PORT,MONGO_URL} from './config';
import  flash from 'connect-flash';
import cors from 'cors';
import session from 'express-session';
import indexAuth from './Routes/index';
import userAuth from './Routes/user';
import bodyParser from 'body-parser';

const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({credentials: true}));
app.set('view engine', 'ejs');

app.use(session({secret: 'secret',resave: true,saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req:any, res:any, next:any) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

app.use('/', indexAuth);
app.use('/users', userAuth);


mongoose.connect(MONGO_URL).then(()=>{
    console.log("DataBase connected to Your Application");
    app.listen(PORT,()=>{
        console.log(`Your Server is Ready at port ${PORT}`);
    });
});