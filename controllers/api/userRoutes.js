const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/game');
    return;
  }
  // If the user is already logged in, redirect the request to another route
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      console.log(userData)
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
