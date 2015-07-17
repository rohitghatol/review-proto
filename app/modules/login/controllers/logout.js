/**
 * Created by rohitghatol on 7/17/15.
 */
/**
 * Created by rohitghatol on 7/17/15.
 */
angular.module('login')
  .controller('LogoutCtrl',['$scope',function($scope){
    $scope.logout=function(){
      console.log("Logout");
    }
  }]);
