(function () {

	'use strict';

	angular.module('be.cw.test.film.overview.ui', ['ngRoute'])
		.config(['$routeProvider', filmOverviewUiConfig])
		.controller('FilmOverviewController', FilmOverviewController);

	function filmOverviewUiConfig($routeProvider) {
		$routeProvider.when('/films', {
			templateUrl: 'films.html',
			controller: 'FilmOverviewController',
			controllerAs: 'vm'
		});
	}

	function FilmOverviewController() {
		var vm = this;

		function init() {
			vm.films = [
				{
					title: 'The GodFather',
					director: 'Francis Ford Coppola'
				},
				{
					title: 'The Lord of the Rings: The Return of the King',
					director: 'Peter Jackson'
				}
			];
		}
		init();
	}

})();
