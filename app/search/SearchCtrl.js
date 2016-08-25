angular.module('app').controller('SearchCtrl',  function($scope, $state, SearchService){
 
	$scope.getMovie = function(){
   var title = $scope.movieTitle;
   
   if(title.length === 9 && title.startsWith("tt") && (title.substring(2)^0) ==title.substring(2)){
     $state.go('home.detail', {id:title});
   }
   var data = SearchService.get({s:$scope.movieTitle, plot:'@short', r:'@json'});
   data.$promise.then(function(data){
     $scope.movieList = data.Search;
     $scope.page = 1;
     $scope.totalpages = Math.ceil(data.totalResults/10);
     if($scope.page === $scope.totalpages)
     {
      $scope.lastPage =true;
    }else{
      $scope.lastPage =false;
    }
  });
 };

 $scope.getMoreMovies = function(page){
  if( page < $scope.totalpages){
   $scope.isloading = true;
   $scope.page = page+1;
   if($scope.page === $scope.totalpages)
   {
    $scope.lastPage =true;
  }else{
    $scope.lastPage =false;
  }
  var data = SearchService.get({s:$scope.movieTitle, plot:'@short', r:'@json', page:page});
  data.$promise.then(function(data){
   
   for(var i = 0; i<data.Search.length; i++){
     $scope.movieList.push(data.Search[i]);
   }
 });
}
};

});