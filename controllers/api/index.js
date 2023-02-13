const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const highscoreRoute = require('./highscoreRoute');
const gameRoutes = require('./gameRoutes')

router.use('/highscore', highscoreRoute);
router.use('/users', userRoutes);
router.use('/game', gameRoutes);

module.exports = router;