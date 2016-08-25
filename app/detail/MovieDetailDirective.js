angular.module('app').directive('movieDetail',  function( LikeService){
	return {
		scope: {
			movie: '='
		},
		templateUrl: 'app/detail/movieDetail.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.like = function(movie){
				LikeService.addMovie(movie);
			};
		}
	};
});