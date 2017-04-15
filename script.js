//module
var app = angular.module("prgBar", []);

//directive
app.directive('progressBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'progress-bar.html',
        controller: function ($scope) {

            this.startTime = 0;
            this.endTime = 100;
            this.progressValue = 0;

            $scope.$watch("prgbar.progressValue", function (newVal, oldVal) {
                if (newVal === null)
                    newVal = 0;
                $("#progress-elapsed").css("width", newVal + '%');
                $("#progress-remaining").css("width", (100 - newVal) + '%');
            });
        },
        controllerAs: "prgbar"
    }
});
