(function () {
    var app = angular.module('profileApp', []);
    app.controller('displayController', function () {
        this.contents = profileArray;
    });

    app.controller('profileController', function () {
        this.profile = {};

        this.editProfile = function (content) {
            profileArray = [];
            profileArray.push(this.profile);
            this.profile = {};
        }
    });

    var profileArray = [
        {
            email: = 'placeholderEmail@gmail.com',
            age: = '22',
            sex: = 'male',
            school: = 'Florida Atlantic University'
        }
    ];

})();