describe('be.cw.test.film.overview.ui', function () {

	var FILMS = [{
		title: 'testFilm',
		director: 'testDirector'
	}];

	var vm, $controller, $httpBackend;

	describe('FilmOverviewController', function () {

		beforeEach(function () {
			module('be.cw.test.film.overview.ui', function ($provide) {});

			inject(function (_$controller_, _$httpBackend_) {
				$controller = _$controller_;
				$httpBackend = _$httpBackend_;
			});
		});

		function _createController() {
			$httpBackend.expectGET('http://localhost:8081/api/films').respond(200, FILMS);

			vm = $controller('FilmOverviewController', {});

			$httpBackend.flush();
		}

		describe('init', function () {
			it('retrieves films', function () {
				_createController();

				expect(vm.films[0].title).toEqual('testFilm');
				expect(vm.films[0].director).toEqual('testDirector');
			});
		});
	});
});