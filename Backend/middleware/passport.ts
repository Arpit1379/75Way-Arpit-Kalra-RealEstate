const LocalStrategy = require('passport-local').Strategy;
import  bcrypt from 'bcryptjs';
import  User from '../Models/User';

module.exports = function(passport:any) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email:any, password:any, done:any) => {

      User.findOne({
        email: email
      }).then((user:any) => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        bcrypt.compare(password, user.password, (err:any, isMatch:any) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user:any, done:any) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id:any, done:any) {
    User.findById(id, function(err:any, user:any) {
      done(err, user);
    });
  });
};