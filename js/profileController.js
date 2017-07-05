// myApp.controller('profileCtrl',function($scope) {
// $scope.showHints = true;
//     $scope.user = {
//       name: "",
//       email: "",
//       social: "123456789",
//       phone: "N/A"
//     };
//
//
//   });
  myApp.controller('profileCtrl', function($scope, $mdDialog) {
  $scope.showHints = true;

  $scope.submitted = false;

  // function to submit the form after all validation has occurred
  $scope.submitForm = function() {

     $scope.submitted = true;

    // check to make sure the form is completely valid
    if ($scope.userForm.$valid) {
      alert('our form is amazing');
    }
    else {
      alert('ERROR');
    }
  }
      return $scope.showDialog = function(evt) {
        return $mdDialog.show({
          controller: function($scope) {
            return angular.extend($scope, {
              user: {
                title: 'Developer',
                email: 'ipsum@lorem.com',
                firstName: '',
                lastName: '',
                company: 'Google',
                address: '1600 Amphitheatre Pkwy',
                city: 'Mountain View',
                state: 'CA',
                biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
                postalCode: '94043'
              },
              closeDialog: function() {
                return $mdDialog.hide();
              }
            });
          },
          templateUrl: 'dialogContent',
          targetEvent: evt
        });
      };
    });
