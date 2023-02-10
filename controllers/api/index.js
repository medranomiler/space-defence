const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const highscoreRoute = require('./highscoreRoute');

router.use('/highscore', highscoreRoute);
router.use('/users', userRoutes);

module.exports = router;