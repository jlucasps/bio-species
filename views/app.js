
define(['jquery',
        'backbone',
        'views/specie',
        'models/specie',
        'collections/specie'],
function($,
        Backbone,
        SpecieView, 
        SpecieModel, 
        SpecieCollection) {

  var AppView = Backbone.View.extend({
    
    el: $("#placeholder"),

    initialize: function() {
      this.species = new SpecieCollection();
      this.species.bind('all', this.render, this);
      this.species.fetch();
    },

    render: function() {
      var _this = this;
      _this.$el.empty();
      this.species.each(function(specie) {
        var specieView = new SpecieView({model: specie});
        _this.$el.append(specieView.$el);
      });
      return this;
    }

  });

  return AppView;
});