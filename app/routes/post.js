import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          model.set(key,params[key]);
        }
        console.log("post.js", params);
      });
      model.save();
      this.transitionTo('index');
    },

    delete(model) {
      if (confirm('Are you sure you want to delete this post?')) {
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
