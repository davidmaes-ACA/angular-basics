describe('be.cw.test.film.overview.ui', function () {

	var FILMS = [{
		title: 'testFilm',
		director: 'testDirector'
	}];

	var vm, $controller, $httpBackend;
	var locationMock;

	describe('FilmOverviewController', function () {

		beforeEach(function () {
			locationMock = jasmine.createSpyObj('locationMock', ['path']);

			module('be.cw.test.film.overview.ui');

			inject(function (_$controller_, _$httpBackend_) {
				$controller = _$controller_;
				$httpBackend = _$httpBackend_;
			});
		});

		function _createController() {
			$httpBackend.expectGET('http://localhost:8081/api/films').respond(200, FILMS);

			vm = $controller('FilmOverviewController', {
				$location: locationMock
			});

			$httpBackend.flush();
		}

		describe('init', function () {
			it('retrieves films', function () {
				_createController();

				expect(vm.films[0].title).toEqual('testFilm');
				expect(vm.films[0].director).toEqual('testDirector');
			});
		});

		describe('goToCreateFilm', function () {
			it('redirects to create-film page', function () {
				_createController();

				vm.goToCreateFilm();

				expect(locationMock.path).toHaveBeenCalledWith('/create-film')
			});
		});
	});
});