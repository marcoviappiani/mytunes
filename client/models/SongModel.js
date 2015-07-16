// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.on('ended', this.dequeue, this);
  },

  defaults: {
    playCount: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount') +1);
    console.log(this.get('playCount'));
  },

  enqueue : function(){
    //adds a new song queue entry view
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    //dequeue gets the first model in the collection and detaches it
    this.trigger('dequeue', this);
    console.log("you have triggered dequeue");
  }

});
