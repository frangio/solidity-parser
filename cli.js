#!/usr/bin/env node

/* eslint no-console: 0 */

var argv = require("yargs").argv;
var SolidityParser = require("./index.js");


var result;

if (argv.e) {
  result = SolidityParser.parse(argv.e || argv.expression);
} else {
  result = SolidityParser.parseFile(argv.f || argv.file || argv._[0]);
}

console.log(JSON.stringify(result, null, 2));
