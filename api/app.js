const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
// const session = require('cookie-session')
const bodyParser = require('body-parser')
const compression = require('compression')
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
const createGraphQLLogger = require('graphql-log');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');

const schema = require('./src/schema');
const rootResolver = require('./src/resolvers');
const index = require('./src/routes')
const auth = require('./src/routes/auth')
const mongo = require('./src/db/mongo');

const app = express()

app.use(compression())

app.use(
  cors({
    origin: (reqOrigin, callback) => {
      const whitelist = ['wishhack.xyz', 'localhost']
      if (whitelist.filter(w => reqOrigin && reqOrigin.includes(w))) {
        callback(null, true)
      } else {
        callback(new Error('Now Allowed by CORS'))
      }
    },
    credentials: true
  })
)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use(session({ keys: [process.env.cookieSigningKey || 'secretkey1'] }))
//
// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new LocalStrategy(Account.authenticate()))
//
// passport.serializeUser(Account.serializeUser())
// passport.deserializeUser(Account.deserializeUser())

app.use('/', index)
app.use('/auth', auth)

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
  })
  .catch(err => {
    console.error('app failed to connect to database', err); // eslint-disable-line
    process.exit(1);
  });