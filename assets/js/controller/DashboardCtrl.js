/**
 * Created by yunfeng on 11/04/15.
 */
angular.module('MyScheduler')
    .controller('DashboardCtrl', ['$scope', function ($scope) {
        $scope.test = 'This is test text';

        $scope.submitSignupForm = function(){

            // Set the loading state (i.e. show loading spinner)
            $scope.signupForm.loading = true;

            // Submit request to Sails.
            $http.post('/signup', {
                name: $scope.signupForm.name,
                title: $scope.signupForm.title,
                email: $scope.signupForm.email,
                password: $scope.signupForm.password
            })
                .then(function onSuccess(sailsResponse){
                    window.location = '/';
                })
                .catch(function onError(sailsResponse){

                    // Handle known error type(s).
                    // If using sails-disk adpater -- Handle Duplicate Key
                    var emailAddressAlreadyInUse = sailsResponse.status == 409;

                    if (emailAddressAlreadyInUse) {
                        toastr.error('That email address has already been taken, please try again.', 'Error');
                        return;
                    }

                })
                .finally(function eitherWay(){

                })
        }
    }]);