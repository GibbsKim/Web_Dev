import { getVisualizeLoader } from 'ui/visualize/loader';

const app = require('ui/modules').get('apps/kibana_sample_plugin', []);

app.controller('TestVisApp', function ($scope, Private, serviceSettings) {
  // showing saved kibana visualizations
  $scope.visualizationList = null;
  $scope.selectedVisualization = null;
  let visualizeLoader = null;

  getVisualizeLoader().then(loader => {
    visualizeLoader = loader;
    loader.getVisualizationList().then(list => {
      $scope.visualizationList = list;
    });
  });

  const visContainer = $('.test-vis-app-visualize');
  const timeRange = {
    min: 'now-7d/d',
    max: 'now'
  };

  $scope.$watch('selectedVisualization', (visualizationId) => {
    if (!visualizationId) return;
    visualizeLoader.embedVisualizationWithId(visContainer, visualizationId, {
      timeRange: timeRange
    });
  });
});
