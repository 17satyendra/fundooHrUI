myApp.controller('homeController', function($scope, $mdDialog, $timeout, $mdSidenav){
  console.log('cxvcbvcv')
  // $scope.addEmployee = function(ev) {
  //   console.log('cxvbcvbcvbc');
  //   $mdDialog.show({
  //
  //     templateUrl: 'templates/dialog.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  //   })
  //   .then(function(answer) {
  //     $scope.status = 'You said the information was "' + answer + '".';
  //   }, function() {
  //     $scope.status = 'You cancelled the dialog.';
  //   });
  // };
     $scope.toggleLeft = buildToggler('left');
     $scope.toggleRight = buildToggler('right');

     function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
     }
     var ctrl = this;
 $scope.search = null;
 $scope.showPreSearchBar = function() {
   return ctrl.search == null;
 };
 $scope.initiateSearch = function() {
   $scope.search = '';
 };
 $scope.showSearchBar = function() {
   return $scope.search != null
 };
 $scope.endSearch = function() {
   return $scope.search = null;
 };
 $scope.submit = function() {
   console.error('Search function not yet implemented');
 }

 // to focus on input element after it appears
 $scope.$watch(function() {
   return document.querySelector('#search-bar:not(.ng-hide)');
 }, function(){
     document.getElementById('search-input').focus();
 });
  $scope.cities = ["Kanpur", "Panvel", "Bhopal", "Mumbai"];
  $scope.personalDetails = [
          {
              'fname':'Muhammed',
              'lname':'Shanid',
              'email':'shanid@shanid.com',
              'password':'12345',
              'mobile':'9124573512',
              'address':'32 deonar',
              'city':'Mumbai',
              'country':'India',
              'zip':'452182'
          },
          {
              'fname':'John',
              'lname':'Abraham',
              'email':'john@john.com',
              'password':'12345',
              'mobile':'0021425781',
              'address':'89 Bhandup',
              'city':'Mumbai',
              'country':'India',
              'zip':'452512'
          }];

          $scope.addNew = function(personalDetail){
              $scope.personalDetails.push({
                  'fname': "",
                  'lname': "",
                  'email': "",
                  'password':"",
                  'mobile':"",
                  'address':"",
                  'city':"",
                  'country':"",
                  'zip':"",
                  'isNew':true
              });
          };

          $scope.remove = function(){
              var newDataList=[];
              $scope.selectedAll = false;
              angular.forEach($scope.personalDetails, function(selected){
                  if(!selected.selected){
                      newDataList.push(selected);
                  }
              });
              $scope.personalDetails = newDataList;
          };

      $scope.checkAll = function () {
          if (!$scope.selectedAll) {
              $scope.selectedAll = true;
          } else {
              $scope.selectedAll = false;
          }
          angular.forEach($scope.personalDetails, function(personalDetail) {
              personalDetail.selected = $scope.selectedAll;
          });
      };
      $scope.save=function(personalDetail){
        // for(var i=0; i< personalDetail.length; i++ ){
        //   if (isNew) {
        //
        //   }
        // }
        //
          console.log($scope.personalDetails);
      }

})
$(document).ready(function(){
     var i=1;
    $("#add_row").click(function(){
     $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td><td><input name='address"+i+"' type='text' placeholder='Address' class='form-control input-md'  /><td><input name='city"+i+"' type='text' placeholder='city' class='form-control input-md'  /><td><input name='Nationality"+i+"' type='text' placeholder='Nationality' class='form-control input-md'  />");

     $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
     i++;
 });
    $("#delete_row").click(function(){
      if(i>1){
    $("#addr"+(i-1)).html('');
    i--;
    }
  });

});
