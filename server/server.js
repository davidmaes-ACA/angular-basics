var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;
var router = express.Router();

var filmsIdCounter = 7;

var films = [
    {
        id: 1,
        title: 'The GodFather',
        director: 'Francis Ford Coppola'
    },
    {
        id: 2,
        title: 'The Lord of the Rings: The Return of the King',
        director: 'Peter Jackson'
    },
    {
        id: 3,
        title: 'Gladiator',
        director: 'Ridley Scott'
    },
    {
        id: 4,
        title: 'A Clockwork Orange',
        director: 'Stanley Kubrick'
    },
    {
        id: 5,
        title: 'The Green Mile',
        director: 'Frank Darabont'
    },
    {
        id: 6,
        title: 'Reservoir dogs',
        director: 'Quentin Tarantino'
    }
];

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

router.get('/films', function(req, res) {
    res.json(films);
});

router.post('/films', function(req, res) {
    var film = req.body;
    film.id = filmsIdCounter;
    filmsIdCounter++;
    films.push(film);
    res.json();
});

router.get('/films/:id', function(req, res) {
    var id = req.params.id;
    var film = films.filter(function( obj ) {
        return obj.id == id;
    })[0];
    res.json(film);
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
