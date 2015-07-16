// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // model: songQueue,

  tagName: "table",

  initialize: function() {
    this.render();
    console.log('HI', this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    console.log('SQView render has run');
    this.$el.children().detach();

    if(!this.collection) {
      this.$el.html('<th>Queue</th>')
    } else {
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
  }

  // events: {
  //   'enqueue': 'render'
  // }

});
