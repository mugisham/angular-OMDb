angular.module('app').controller('LikeCtrl',  function($scope, LikeService){
	$scope.likestack = LikeService.getMovies();
	
	$scope.deleteMovie = function(movieIndex){
		LikeService.deleteMovie(movieIndex);
	};

	$scope.clearLikes = function(){
		LikeService.clearLikes();
	};
});