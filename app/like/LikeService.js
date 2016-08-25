angular.module('app').factory('LikeService', function() {
	var likeList = [];
  return {
    addMovie: function(movie){
      var unique = this.isUnique(movie);
      if(unique){
       toastr.success(movie.Title+" added to liked List");
       likeList.push(movie);
     }else{
       toastr.warning(movie.Title+" is already in Like List");
     }
   },

   isUnique: function(movie){
    for(var i = 0; i<likeList.length; i++){
      if(likeList[i].imdbID === movie.imdbID){
        return false;
      }
    }
    return true;
  },

  getMovies: function(){
    return likeList;
  },

  deleteMovie: function(movieIndex){
    likeList.splice(movieIndex, 1);
  },

  clearLikes: function(){
    while (likeList.length) {
      likeList.pop();
    }
  }
};
});