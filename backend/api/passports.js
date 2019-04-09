const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const user = require("./models/User");
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};
// module.exports = passport => {
//   passport.use(
//     new JWTStrategy(opts, function(jwt_payload, done) {
//       User.findOne({ id: jwt_payload.sub }, function(err, user) {
//         if (err) {
//           return done(err, false);
//         }
//         if (user) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//           // or you could create a new account
//         }
//       });
//     })
//   );
// };
