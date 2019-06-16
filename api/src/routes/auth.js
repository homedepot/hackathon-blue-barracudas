const router = require('express').Router()
const passport = require('passport')

router.post('/login', passport.authenticate('local'), function(req, res) {
  const { firstName, lastName, username } = req.user
  res.json({ firstName, lastName, username })
})

router.get('/logout', function(req, res) {
  req.logout()
  res.sendStatus(200)
})

module.exports = router
