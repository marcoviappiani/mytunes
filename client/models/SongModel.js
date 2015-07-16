// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue : function(){
    //adds a new song queue entry view
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    //dequeue gets the first model in the collection and detaches it
  }

});
