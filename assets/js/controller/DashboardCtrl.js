/**
 * Created by yunfeng on 11/04/15.
 */
angular.module('MyScheduler')
    .controller('DashboardCtrl', ['$scope', function ($scope) {
        $scope.test = 'This is test text';

        $scope.appointments = [
            {
                startTime:      '9:00am',
                endTime:        '9:30am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                startTime:      '10:00am',
                endTime:        '10:50am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                startTime:      '11:00am',
                endTime:        '1:30am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                startTime:      '1:00pm',
                endTime:        '2:30pm',
                customerName:   'Mr. Gord',
                service:        'body check'
            },
            {
                startTime:      '3:00pm',
                endTime:        '3:30pm',
                customerName:   'Mr. Chen',
                service:        'body check'
            }
        ];

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
        };

        $scope.showAppointment = function(appId){
            $scope.minutes = appId;
        }
    }]);