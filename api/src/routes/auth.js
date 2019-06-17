const router = require('express').Router();
const passport = require('passport');

router.post('/login', function (req, res) {
  passport.authenticate('local', function (err, user, info) {
    console.log({err, user, info});
    if (!user) return res.json({login: 'Unsuccessful'})
    req.logIn(user, function (err) {
      if (err) {
        console.log('logIn Error: ', err)
      }
      res.json({login: 'Successful', user: user.username})
    });
  })(req, res);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;