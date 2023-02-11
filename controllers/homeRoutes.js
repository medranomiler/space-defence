const router = require('express').Router();
const { User } = require('../models')
// const withAuth = require('../utils/auth');

// will get all user names
router.get('/', async (req, res)=> {
    res.render('homepage');
});

router.get('/login', (req, res) => {
// If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


module.exports = router;
