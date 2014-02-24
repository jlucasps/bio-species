require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.10.2',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    text: 'libs/requirejs/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require(['views/app'], function(AppView) {
  var appView = new AppView();
  
});