const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const createGraphQLLogger = require('graphql-log');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const schema = require('./src/schema');
const rootResolver = require('./src/resolvers');
const index = require('./src/routes');
const auth = require('./src/routes/auth');
const mongo = require('./src/db/mongo');
const UserDetails = require('./src/db/userDetails');

const app = express()

const allowedOrigins = [
  'wishhack.xyz',
  'localhost'
];

app.use(cors({
    origin: function (origin, callback) {
      console.log('made it to origin check')
      // allowedOrigin = allowedOrigins.find(w => origin && origin.includes(w));
      // if(!allowedOrigin){
      //   var msg = 'The CORS policy for this site does not ' +
      //     'allow access from the specified Origin.';
      //   return callback(new Error(msg), false);
      // }
      return callback(null, true);
    },
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use(session({
  secret: "tHiSiSasEcRetStr",
  resave: true,
  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome " + req.query.username + "!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  console.log('hi')
  User.findById(id, function (err, user) {
    cb(err, user);
  });
});

mongo()
  .then(db => {
    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        rootValue: rootResolver,
        graphiql: true,
        context: {db},
        formatError: error => {
          const params = {
            message: error.message,
            locations: error.locations,
            stack: error.stack
          };
          return params;
        }
      })
    );
    // Create a logger
    const logExecutions = createGraphQLLogger();

    // Wrap your resolvers
    logExecutions(rootResolver);

    const port = process.env.PORT || 3002;

    const server = app.listen(port, function () {
      console.log('Express server listening on port ' + server.address().port)
    });

    passport.use(new LocalStrategy(
      function (username, password, done) {
        console.log({username});

        UserDetails.findOne({
          username: username
        }, function (err, user) {

          console.log('UserDetails callback...')
          console.log({user})
          console.log({err})

          if (err) {
            console.log({err});
            return done(err);
          }

          if (!user) {
            console.log('No user found');
            return done(null, false);
          }

          if (user.password != password) {
            console.log('User Found, invalid password');
            return done(null, false);
          }

          console.log('User Found!');
          return done(null, user);
        });
      }
    ));

    app.use('/', index);
    app.use('/auth', auth);
  })
  .catch(err => {
    console.error('app failed to connect to database', err);
    process.exit(1);
  });