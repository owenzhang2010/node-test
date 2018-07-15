// this app.js is our "main module"
// everything you define in here is "scoped" to this module

/*function sayHi(name) {
	console.log('hi ' + name); // console is "global object"
}*/

// setTimeout(), clearTimeout(): wait for a bit to execute code
// setInterval(), clearInterval(): interval b/w repetitive function calls
// console.log()
// ^^^ all global objects

// var message = '';
// global.message UNDEFINED: these variables defined aren't added to global
// global.all those global objects/functions above will work tho

// console.log(module); // bunch of module properties. module NOT global

// const log = require('./logger.js'); //.js is optional, returns exports obj of the module
// const good practice: don't want to accidentally override
// log.log('message');

const path = require('path');
var pathObj = path.parse(__filename);
// console.log(pathObj);

const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
// console.log(`Total memory: ${totalMem}`);
// console.log(`Free memory: ${freeMem}`);

const fs = require('fs'); // you should usually use async methods, not synchronous
const files = fs.readdirSync('./');
// console.log(files);

const fasync = fs.readdir('./', function(err, files) { // <-- this bad boy here is a CALLBACK. one param valued, one null
	if (err) console.log(err);
	else console.log(files);
});

const EventEmitter = require('events'); // class
// const emitter = new EventEmitter(); // instance of EE

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg) => {
	console.log('Listener called');
	console.log(arg);
}); // listener. MUST be defined before emitting the event! or nothing happens

logger.log('message');
