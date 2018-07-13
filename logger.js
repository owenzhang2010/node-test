var url = 'http://mylogger.io/log';

function log(message) {
	// send http request
	console.log(message);
}

// both private to this module
// exports is the stuff you make "public"

module.exports.log = log; // set new property in exports object called log, which is this log function
