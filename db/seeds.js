const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');

User.collection.drop();

User
  .create([{
    name: 'Muge Ersoz',
    username: 'mersoz',
    email: 'muge@ersoz.org',
    password: 'm',
    passwordConfirmation: 'm'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);

    // return Playlist
    //   .create([]);
  })
  // .then((playlists) => {
  //   console.log(`${playlists.length} playlists created!`);
  // })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
