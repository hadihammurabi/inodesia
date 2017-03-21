app = angular.module('inodesia',['ngRoute'])

app.config(['$routeProvider',($routeProvider)=>{
  $routeProvider
  .when('/',{
    templateUrl:'pages/menu.html'
  })
}])
