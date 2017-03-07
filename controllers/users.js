const User = require('../models/user');

function showProfile(req, res, next) {
  User
  .findById(req.params.id)
  .then((user) => {
    res.render('users/show', { user });
  })
  .catch(next);
}

module.exports = {
  show: showProfile
};
