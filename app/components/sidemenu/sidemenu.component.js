'use strict';
/**
* Templates and paths
*/
import template from './sidemenu.html';
import path from 'path';
const imgsPath = path.join(__dirname,"/app/resources/imgs/");
/**
* Side Menu Controller
*/
class SideMenu {
  /**
  * constructor
  */
  constructor($http,$state,$stateParams) {
    this.deps = {
      $http :$http,
      $state:$state,
      $stateParams:$stateParams
    }
    //imgs
    this.imgs = {
      logo : this.getImg("logo.png")
    }
    //albums data
    this.albums = [];
    //get albums data
    this.getAlbums();
  }
  /**
  * Get Album data
  */
  getAlbums() {
    let self = this;
    this.deps.$http.get('app/data/data.json').then(function(response){
        self.albums = response.data;
    });
  }
  /**
  * Get Resource path
  */
  getImg(name) {
    return path.join(imgsPath,name);
  }
}
/**
* Regiser the component
*/
export const sidebarComponent = {
  template:template,
  controller:SideMenu,
}
