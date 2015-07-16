// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize : function() {
    this.render();

    //this.on('click', this.model.dequeue, this.model); //need to fins this
  },

  events: {
    'click': function() {
      this.model.dequeue();
      console.log('clicked song: called dequeue');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
