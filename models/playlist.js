const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  year: { type: Number },
  live: { type: Boolean },
  albumIMG: { type: String },
  playedOn: { type: Date },
  addInfo: { type: String },
  url: { type: String }
}, {
  timestamps: true
});

const playlistSchema = new mongoose.Schema({
  name: { type: String },
  songs: [ songSchema ],
  private: { type: Boolean },
  tags: { type: Array },
  createdOn: { type: Date },
  playedOn: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema);
