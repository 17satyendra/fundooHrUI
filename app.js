angular
  .module('sidenavDemo2', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }  var ctrl = this;
  ctrl.search = null;
  ctrl.showPreSearchBar = function() {
    return ctrl.search == null;
  };
  ctrl.initiateSearch = function() {
    ctrl.search = '';
  };
  ctrl.showSearchBar = function() {
    return ctrl.search != null
  };
  ctrl.endSearch = function() {
    return ctrl.search = null;
  };
  ctrl.submit = function() {
    console.error('Search function not yet implemented');
  }

  // to focus on input element after it appears
  $scope.$watch(function() {
    return document.querySelector('#search-bar:not(.ng-hide)');
  }, function(){
      document.getElementById('search-input').focus();
  });
  });
  