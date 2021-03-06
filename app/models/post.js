import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  img: DS.attr(),
  created: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
