angular.module('app').factory('HistoryService', function() {
	var historyList = [];
  return {
    addMovie: function(movie){
      console.log(movie);
      if(!movie.Error){
       movie.TimeOfSearch = new Date();
       historyList.push(movie);
     }
   },
   getMovies: function(){
    return historyList;
  },
  clearHistory: function(){
    console.log("Delete hit");
    while (historyList.length) {
      historyList.pop();
    }
  }
};
});