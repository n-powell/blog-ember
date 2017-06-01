import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  created: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
