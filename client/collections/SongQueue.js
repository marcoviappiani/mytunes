// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  removeSong : function(song) {
    var currSong = this.at(0);
    this.remove(song);
    if (song === currSong) {
      this.playFirst();
    }
  },

  addSong : function(song) {
    this.add(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst : function() {
    this.at(0).play();
  }

});