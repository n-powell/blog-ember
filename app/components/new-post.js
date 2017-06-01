import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      var addNewPost = true;
      this.set('addNewPost', addNewPost);
      console.log('new-post.js addNewPost:', addNewPost);
      this.sendAction('postFormShow', addNewPost);
    },
    savePost () {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        img: this.get('img'),
        created: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
