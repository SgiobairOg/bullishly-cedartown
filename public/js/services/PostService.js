// public/js/services/PostService.js
angular.module('PostService', []).factory('Post', ['$http', function($http) {
  
  return {
    // call to get all posts
    get : function() {
      
      return $http.get('/api/posts');
      
    },
    
    // calls for other API routes once created
    
    //  call to POST and create a new post
    create : function( postData ) {
      
      return $http.post( '/api/posts', postData );
      
    },
    
    //  call to DELETE a post
    delete : function( id ) {
      
      return $http.delete( `/api/posts/${id}` );
      
    } 
  }
  
}]);