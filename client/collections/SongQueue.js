// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('update', this.updateQueuePlay, this);
  }

  // events: {
  //   'enqueue': 'updateQueuePlay'
  // },

  // updateQueuePlay : function() {
  //   debugger;
  //   if (this.length === 1) {
  //     debugger;
  //     this.model.play();
  //   }
  // }

});