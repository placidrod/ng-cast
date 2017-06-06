angular.module('video-player')
.component('videoListEntry', {
  // TODO
  templateUrl: 'src/templates/videoListEntry.html',
  controller: function($scope) {
    $scope.videos = window.exampleVideoData;
  }
});
