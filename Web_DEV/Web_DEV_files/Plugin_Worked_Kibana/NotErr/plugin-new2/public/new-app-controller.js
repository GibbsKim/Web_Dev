import { getVisualizeLoader } from 'ui/visualize/loader';
import 'ui/visualize';

const app = require('ui/modules').get('apps/plugin-new2', []); // custom plugin를 하나의 module로

app.controller('NewVisApp', function ($scope, Private, serviceSettings) { // 
	$scope.visualizationList = null; // Binding 항목 초기화를 배열로 바꿔보자
	$scope.firstVisualization = null; // 1번째 div 구역에 들어갈 녀석 binding
	$scope.secondVisualization = null; // 2번째 div 구역에 들어갈 녀석 binding
	$scope.thirdVisualization = null; // 3번째 div 구역에 들어갈 녀석 binding
	$scope.fourthVisualization = null; // 4번째 div 구역에 들어갈 녀석 binding
	let visualizeLoader = null;

	getVisualizeLoader().then(loader => {		// return getVisualizationLoader()
		 visualizeLoader = loader;           // 1]에서 Private 타입의 VisualizeLoader가 return 된다.
		 loader.getVisualizationList().then(list => {  // then()으로 callback function 호출해서 loader.js에 있는 걸 호출할것
      	 	$scope.visualizationList = list; // 함수()를 바인딩한다. (return savedVisulizations.find().then(result
    	});
	});


	const visContainer_1 = $('.firstCont');
	const visContainer_2 = $('.secondCont');
	const visContainer_3 = $('.thirdCont');
	const visContainer_4 = $('.fourthCont');
	
	$scope.$watch('firstVisualization', function(visualizationId){
		if(!visualizationId) return;
		visualizeLoader.embedVisualizationWithId(visContainer_1, visualizationId, true);
	});
	$scope.$watch('secondVisualization', function(visualizationId){
		if(!visualizationId) return;
		visualizeLoader.embedVisualizationWithId(visContainer_2, visualizationId, true);
	});
	$scope.$watch('thirdVisualization', function(visualizationId){
		if(!visualizationId) return;
		visualizeLoader.embedVisualizationWithId(visContainer_3, visualizationId, true);
	});
	$scope.$watch('fourthVisualization', function(visualizationId){
		if(!visualizationId) return;
		visualizeLoader.embedVisualizationWithId(visContainer_4, visualizationId, true);
	});
});