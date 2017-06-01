import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost1: false,
  actions: {
    postFormShow(addNewPost) {
      this.set('addNewPost1', addNewPost);
    },
  }
});
