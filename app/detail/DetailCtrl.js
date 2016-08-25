angular.module('app').controller('DetailCtrl',  function($scope, $stateParams, SearchService, HistoryService){

	var data = SearchService.get({i:$stateParams.id, plot:'@full', r:'@json'});

	data.$promise.then(function(data){
		$scope.movie = data;
		HistoryService.addMovie(data);
	});
});