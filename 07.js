#!/usr/bin/env node

const fs = require('fs')

var contents = fs.readFileSync('07.json', 'utf8')
console.log(contents);
