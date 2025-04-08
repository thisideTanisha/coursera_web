(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    function LunchCheckController() {
        var lunch = this;

        lunch.items = '';
        lunch.message = '';
        lunch.messageClass = '';

        lunch.checkLunch = function () {
            if (!lunch.items.trim()) {
                lunch.message = 'Please enter data first';
                lunch.messageClass = 'error';
                return;
            }

            var itemsArray = lunch.items.split(',').filter(function (item) {
                return item.trim() !== ''; // Ignore empty items
            });

            if (itemsArray.length <= 3) {
                lunch.message = 'Enjoy!';
                lunch.messageClass = 'success';
            } else {
                lunch.message = 'Too much!';
                lunch.messageClass = 'success';
            }
        };
    }
})();
