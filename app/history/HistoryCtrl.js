angular.module('app').controller('HistoryCtrl',  function($scope, HistoryService){
	$scope.historyStack = HistoryService.getMovies();

	$scope.deleteHistory = function(){
		HistoryService.clearHistory();
	};
});