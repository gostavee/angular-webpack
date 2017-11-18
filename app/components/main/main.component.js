'use strict';
/**
* Main template
*/
import template from './main.html';
/**
* Main controller
*/
class Main {
  /**
  * constructor
  */
  constructor($http,$scope) {
    //dependencies
    this.deps = {
      $http:$http,
      $scope:$scope
    }
    //some plain text
    this.text = {
      "welcome" : "Welcome to movie app",
      "choose" : "Please choose album"
    }
  }
}
/**
* Exporting main component
*/
export const mainComponent = {
  template:template,
  controller:Main,
}
