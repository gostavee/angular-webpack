'use strict';
/**
* Album Template
*/
import template from './album.html';
/**
* Album Controller
*/
class Album {
  /**
  * constructor
  */
  constructor($http,$state,$stateParams,$sce) {
    //dependencies
    this.deps = {
      $http :$http,
      $state:$state,
      $stateParams:$stateParams,
      $sce:$sce
    }
    //show/hide popup
    this.showPopup = false;
    //show/hide errors
    this.showError = false;
    //new movie model
    this.newMovie = {}
    //current album getData
    this.currentAlbum = {};
    //load the data on init
    this.getData();
  }
  /**
  * Load dummy data all data
  */
  getData() {
    let self = this;
    let albumId = this.deps.$stateParams.id;
    self.deps.$http.get('app/data/data.json').then(function(response){
        for(let i = 0; i < response.data.length; i++) {
          if(response.data[i].id == albumId) {
            self.currentAlbum = response.data[i];
            break;
          }
        }
    });
  }
  /**
  * some custom code
  * to get youtube Embed url
  */
  getEmbedUrl(url) {
    if(url.split('v=')[1]) {
      let videoId = url.split('v=')[1].split('&')[0];
      url = this.deps.$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+videoId);
    } else {
      url = null;
    }
    return url;
  }
  /**
  * Show add movie popUp
  */
  openModal() {
    this.showPopup = true;
  }
  /**
  * Add the new Movie
  */
  addMovie(album) {
    if(this.newMovie.title == "" || this.newMovie.desc == "" || this.newMovie.url == "") {
      this.showError = true;
    } else {
      album.videos.push(this.newMovie);
      this.newMovie = {};
      this.showError = false;
      this.showPopup = false;
    }
  }
  /**
  * Hide popUp
  */
  hidePopup() {
    this.showPopup = false;
  }
}
/**
* Regiser the component
*/
export const albumComponent = {
  template:template,
  controller:Album,
}
