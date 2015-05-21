/**
 * Created by yunfeng on 11/04/15.
 */
angular.module('MyScheduler')
    .controller('DashboardCtrl', ['$scope', function ($scope) {
        $scope.test = 'This is test text';

        $scope.appointments = [
            {
                id:             111111,
                startTime:      '9:00am',
                endTime:        '9:30am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                id:             111112,
                startTime:      '10:00am',
                endTime:        '10:50am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                id:             111113,
                startTime:      '11:00am',
                endTime:        '1:30am',
                customerName:   'Mr. Chen',
                service:        'tire change'
            },
            {
                id:             111115,
                startTime:      '1:00pm',
                endTime:        '2:30pm',
                customerName:   'Mr. Gord',
                service:        'body check'
            },
            {
                id:             111116,
                startTime:      '3:00pm',
                endTime:        '3:30pm',
                customerName:   'Mr. Chen',
                service:        'body check'
            }
        ];

        $scope.submitSignupForm = function(){

            console.log("in submitSignupForm");
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
            console.log("In showAppointment");
            $scope.userId = appId;
            $scope.customerName = "Mr. Test";
            $scope.contactInfo = "226 222 6666";
            $scope.service = "This is a test service";
        };

        $scope.addCustomer = function(){
            $scope.addCustomerDisabled = true;
            $scope.messageToShow = "The new customer has been successfully addded to your cusotmer list."
        };

        $scope.confirmAppointment = function(){
            $scope.confirmAppointmentDisabled = true;
            $scope.messageToShow = "The confirmation has been sent to customer."
        };

        $scope.reschedule = function(){
            $scope.rescheduleDisabled = true;
            $scope.messageToShow = "Reschedule has been sent to customer. Please wait for response."
        };

        $scope.appNotifications = [
            {description: 'Kevin cancelled appointment for body repair', updatedTime: '10 mins ago'},
            {description: 'Stephen scheduled appointment for oil change on May 18, 2015', updatedTime: '30 mins ago'},
            {description: 'Linlin re-scheduled appointment for regular maitenance from May 10 to May 22, 2015', updatedTime: '1 hour ago'},
            {description: 'Yunfeng updated appointment adding oil change', updatedTime: '3 hours ago'}
        ];

        $scope.showNotification = function () {
            $scope.detail = 'the notification details';
            $scope.addCustomerDisabled = false;
            $scope.messageToShow = null;
        }
    }]);