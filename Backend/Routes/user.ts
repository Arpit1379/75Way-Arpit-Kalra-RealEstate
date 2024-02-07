import express = require('express');
import  bcrypt from 'bcryptjs';
import  passport from 'passport';
import User from '../Models/User';
import  {  forwardAuthenticated } from '../middleware/auth';

interface Error {
    msg: string;
  }

const router = express.Router();

router.get('/login', forwardAuthenticated, (req:any, res:any) => res.render('login'));

router.get('/register', forwardAuthenticated, (req:any, res:any) => res.render('register'));

router.post('/register', (req:any, res:any) => {
  const { name, email, password, password2 } = req.body;
  let errors:Error[] = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then((user:any) => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({name,email,password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user:any) => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch((err:any) => console.log(err));
          });
        });
      }
    });
  }
});

router.post('/login', (req:any, res:any, next:any) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req:any, res:any) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});
export default router;