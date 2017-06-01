import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment(model) {
      var post = model.post;
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        created: moment().format('MMMM Do YYYY, h:mm:ss a'),
        post: post
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
