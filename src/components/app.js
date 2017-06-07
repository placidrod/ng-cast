angular.module('video-player')
.controller('AppController', function (youTube){
  this.searchService = youTube;

  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  youTube.search('first search!', this.searchResults);
})
.component('app', {
  controller: 'AppController',
  templateUrl: 'src/templates/app.html'
});