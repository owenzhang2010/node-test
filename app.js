// this app.js is our "main module"
// everything you define in here is "scoped" to this module

function sayHi(name) {
	console.log('hi ' + name); // console is "global object"
}

// setTimeout(), clearTimeout(): wait for a bit to execute code
// setInterval(), clearInterval(): interval b/w repetitive function calls
// console.log()
// ^^^ all global objects

var message = '';
// global.message UNDEFINED: these variables defined aren't added to global
// global.all those global objects/functions above will work tho

console.log(module); // bunch of module properties. module NOT global
