import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    savePost () {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        img: this.get('img'),
        created: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.sendAction('savePost', params);
    }
  }
});
