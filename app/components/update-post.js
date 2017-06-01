import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    update(model) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        img: this.get('img'),
      };
      console.log("update-post", params);
      this.set('showUpdateForm', false);
      this.sendAction('update', model, params);
    },
    showUpdateForm() {
      this.set('showUpdateForm', true);
    }
  }
});
