//  public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
  
  $routeProvider
  
    //  homepage
    .when( '/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    
    //  posts page
    .when( '/posts', {
      templateUrl: 'views/post.html',
      controller: 'PostController'
    });
    
    $locationProvider.html5Mode(true);
  
}]);