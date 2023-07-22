const requireIndex = require('requireindex');
const path = require('node:path');

module.exports.rules = requireIndex(path.join(__dirname, 'rules'));
