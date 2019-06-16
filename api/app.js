const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const compression = require('compression')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const createGraphQLLogger = require('graphql-log');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');

const schema = require('./src/schema');
const rootResolver = require('./src/resolvers');
const index = require('./src/routes')
const auth = require('./src/routes/auth')
const mongo = require('./src/db/mongo');
const UserDetails = require('./src/db/userDetails');

const app = express()

const allowedOrigins = [
  'wishhack.xyz',
  'localhost:3001'
];

app.use(cors({
  origin: function(origin, callback){
    allowedOrigin = allowedOrigins.find(w => origin && origin.includes(w));
    if(!allowedOrigin){
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  credentials: true
  })
);

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({ keys: [process.env.cookieSigningKey || 'secretkey1'] }))
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

app.use('/', index)

mongo()
  .then(db => {
    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        rootValue: rootResolver,
        graphiql: true,
        context: { db },
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

    const server = app.listen(port, function() {
      console.log('Express server listening on port ' + server.address().port)
    })

    passport.use(new LocalStrategy(
      function(username, password, done) {
        UserDetails.findOne({
          username: username
        }, function(err, user) {
          if (err) {
            console.log({err})
            return done(err);
          }

          if (!user) {
            return done(null, false);
          }

          if (user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        });
      }
    ));

    app.post('/auth/login',
      passport.authenticate('local', { failureRedirect: '/error' }),
      function(req, res) {
        res.redirect('/success?username='+req.user.username);
      });
  })
  .catch(err => {
    console.error('app failed to connect to database', err);
    process.exit(1);
  });