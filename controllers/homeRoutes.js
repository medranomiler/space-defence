const router = require('express').Router();
const { User } = require('../models')
// const withAuth = require('../utils/auth');

// will get all user names
router.get('/', async (req, res)=> {
    res.render('homepage');
});




module.exports = router;
