// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', this.updateQueuePlay, this);
    this.on('remove', this.playFirst, this);
  },

  updateQueuePlay : function() {
    console.log('we have updated queue play');
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst : function() {
    this.at(0).play();
  }

});