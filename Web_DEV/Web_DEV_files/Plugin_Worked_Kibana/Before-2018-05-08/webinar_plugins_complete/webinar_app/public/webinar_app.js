import $ from 'jquery';
require('ui/autoload/all');
require('ui/routes').enable();
require('ui/chrome');

import './webinar_app.less';

// https://www.elastic.co/guide/en/kibana/master/development-embedding-visualizations.html#_visualizeloader
import { getVisualizeLoader } from 'ui/visualize/loader';


const app = require('ui/modules').get('apps/webinar_app', []);

require('ui/routes').when('/', {
  template: require('./webinar_app.html'),
  reloadOnSearch: false,
});

app.controller('WebinarDemo', function ($scope, Private) {

  $scope.visualizationList = null;
  $scope.selectedVisualization = null;
  let visualizeLoader = null;

  getVisualizeLoader().then(loader => {
    visualizeLoader = loader;
    loader.getVisualizationList().then(list => {
      $scope.visualizationList = list;
    });
  })

  const visContainer = $('.webinar-demo-visualize');
  const timeRange = {
    min: '2017-10-16T22:00:00.000Z',
    max: '2017-10-20T22:00:00.000Z'
  };

  $scope.$watch('selectedVisualization', () => {
    if (!$scope.selectedVisualization) return;
    visualizeLoader.embedVisualizationWithId(visContainer, $scope.selectedVisualization, {
      timeRange: timeRange
    }).then(handler => {
      console.log('render complete');
    });
  });


});


