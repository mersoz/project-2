const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  year: { type: Number },
  live: { type: Boolean },
  albumIMG: { type: String },
  playedOn: { type: Date },
  addInfo: { type: Date }
});

const playlistSchema = new mongoose.Schema({
  name: { type: String },
  songs: [ songSchema ],
  private: { type: Boolean },
  tags: { type: Array }, //can be searched?
  createdOn: { type: Date },
  playedOn: { type: Date }
});

const userSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  avatar: { type: String },
  playlists: [ playlistSchema ]
});






userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// Lifecycle hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.githubId) {
    this.invalidate('password', 'required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
