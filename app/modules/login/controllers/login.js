/**
 * Created by rohitghatol on 7/17/15.
 */
angular.module('login')
  .controller('LoginCtrl',['$scope','$firebaseAuth',function($scope,$firebaseAuth){

    $scope.login=function(){
      console.log("Login");

      var ref = new Firebase("https://radiant-fire-2421.firebaseio.com/");
      // create an instance of the authentication service
      var auth = $firebaseAuth(ref);
      // login with Facebook
      auth.$authWithOAuthPopup("github").then(function(authData) {
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    }
  }]);
