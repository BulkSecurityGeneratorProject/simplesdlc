(function() {
    'use strict';

    angular
        .module('simplesdlcApp')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Product', 'User'];

    function ProductDetailController($scope, $rootScope, $stateParams, previousState, entity, Product, User) {
        var vm = this;

        vm.product = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('simplesdlcApp:productUpdate', function(event, result) {
            vm.product = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
