angular.module('video-player')
.component('videoList', {
  // TODO
  // bindings: {
  //   data: window.exampleVideoData
  // },
  templateUrl: 'src/templates/videoList.html',
  controller: function($scope) {
    $scope.videos = window.exampleVideoData;
  }
});
