angular.module('app').factory('SearchService', function($resource) {
  return $resource('https://www.omdbapi.com'); 
});