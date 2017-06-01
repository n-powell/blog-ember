import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    updateComment(comment) {
      var params = {
        name: this.get('name'),
        body: this.get('body'),
      };
      this.set('showUpdateForm', false);
      this.sendAction('updateComment', comment, params);
    },
    showUpdateForm() {
      this.set('showUpdateForm', true);
    }
  }
});
