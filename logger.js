// all wrapped in a function ("module wrapper function")
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';
const EventEmitter = require('events'); // class

class Logger extends EventEmitter {
	log(message) { // in class, now a "method"
		console.log(message);
		this.emit('messageLogged', {id : 1, url: 'http://'}); // name of event to be extended/raised by other things
	}
}

// both private to this module
// exports is the stuff you make "public"

// module.exports.log = log; // set new property in exports object called log, which is this log function
module.exports = Logger;
