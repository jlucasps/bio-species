
define(['jquery', 'underscore', 'backbone', 'text!templates/specie.html'],
function($, _, Backbone, SpecieTemplate) {
  
  var SpecieView = Backbone.View.extend({

    template: _.template( SpecieTemplate ),
    
    initialize: function(){
      this.render();
    },
    
    render: function() {
      this.$el.html( this.template( { model: this.model } ) );
    }

  });

  return SpecieView;
});