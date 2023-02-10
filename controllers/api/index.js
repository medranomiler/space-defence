const router = require('express').Router();
const highscoreRoute = require('./highscoreRoute');

router.use('/highscore', highscoreRoute);

module.exports = router;