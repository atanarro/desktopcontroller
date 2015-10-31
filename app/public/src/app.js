(function() {
    'use strict';
    angular
        .module('app', ['ngMaterial', 'main'])
        .config(function($mdThemingProvider) {

            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('amber');
        });
}());
