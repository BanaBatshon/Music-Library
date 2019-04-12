// Constructor library finction
const Library = function (name, creator){
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

// Function to add playlist to playlists arr in library
Library.prototype.addPlaylist = function (playlist) {
  this.playlists.push(playlist);
}

// Playlist function has name and arr of tracks
const playlist = function (name) {
  this.name = name,
  this.tracks= []
}

// Function to add the track to the tracks arr in playlist
playlist.prototype.addTrack = function (track) {
  this.tracks.push(track);
}

// Playlist functopm calculates avg rating of all tracks
playlist.prototype.overallRating = function () {
  let ratings = 0;
  this.tracks.forEach((track) => {
    ratings += track.rating;
  })
  return ratings / this.tarcks.length
}

// Playlist functopm calculates total duration of all tracks
playlist.prototype.totalDuration = function () {
  let duration = 0;
  this.tracks.forEach((track) => {
    duration += track.length;
  })
  return duration;
}

// Track function has title, rating and length
const track = function (title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}

// Creating new instances
let library1 = new Library ('instrumental', 'Bana');
let playlist1 = new playlist ('guitar');
let track1 = new track ('calm', 1, 5)
let track2 = new track('notCalm', 4, 8);

// Testing
playlist1.addTrack(track1);
library1.addPlaylist(playlist1);
console.log(playlist1.totalDuration());
console.log(library1);
console.log(track1);
