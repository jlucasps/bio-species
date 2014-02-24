
define(['backbone', 'models/specie'],
function(Backbone, SpecieModel) {

  var SpecieCollection = Backbone.Collection.extend({

    model: SpecieModel,
    
    url: 'json/species.json',

    parse: function(data) {
      return data.result;
    }

  });

  return SpecieCollection;
});