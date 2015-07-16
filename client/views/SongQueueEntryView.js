// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'enqueue': function() {
  //     debugger;
  //     console.log(songQueue.at(0));
  //     if (songQueue.at(0) === this) {
  //       this.model.play();
  //     }
  //   }
  // },

  initialize : function() {
    this.render();
    // console.log("HIII", this);
    // debugger;
    // if (songQueue.at(0) === this) {
    //   this.model.play();
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
