### installation
Node and Npm should be pre-installed on your system.
 
#### client
install http-server using npm
	
	npm install http-server -g
	
move to the client directory and execute:

	http-server --cors
	
This will start an http server on port 8080: http://localhost:8080/
	
#### rest api

To run the server move to the server directory and execute:

	npm install
	
This will install all necessary dependencies.

Then just execute the following to start the server

	node server.js
	
Server starts on port 8081: http://localhost:8081/api/films

### Testing

Move the the test directory and execute

	npm install
	
This will install all necessary dependencies.

To run the tests execute:

	karma start --single-run --browsers PhantomJS karma.conf.js
	