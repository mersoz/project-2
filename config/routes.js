const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/account')
  .get(secureRoute, registrations.show)
  .delete(secureRoute, registrations.delete);

router.route('/account/edit')
  .put(secureRoute, registrations.edit)
  .post(secureRoute, registrations.update);

router.route('/user')
  .get(secureRoute, registrations.index);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.all('*', (req,res) => res.notFound());

module.exports = router;
