'use strict'

const YAML = require('yaml');
const fs = require('fs');
fs.writeFileSync('ingredients.yaml', YAML.stringify(YAML.parse(fs.readFileSync('ingredients.json', 'utf-8'))));
