function init($uiRouter){
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
    'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is your Application ID
    '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW' // This is your Javascript key
  );
}

angular
    .module('common')
    .run(init);
