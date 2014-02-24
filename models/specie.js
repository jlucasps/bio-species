
define(['backbone'], function() {

  var SpecieModel = Backbone.Model.extend({
    defaults: {
      name: "Empty name"
    },
    initialize: function () {
      
    }
  });

  return SpecieModel;
});