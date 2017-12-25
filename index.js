const path = require('path');

module.exports = isInside;

function isInside(child, parent) {
  child = removeTrailingSlash(toAbsolute(child));
  parent = addTrailingSlash(toAbsolute(parent));

  if (process.platform === 'win32') {
    child = child.toLowerCase();
    parent = parent.toLowerCase();
  }

  return child.indexOf(parent) === 0;
}

function toAbsolute(relative) {
  return path.resolve(relative);
}

function addTrailingSlash(parent) {
  return path.join(parent, path.sep);
}

function removeTrailingSlash(child) {
  return child[child.length - 1] === path.sep ? child.slice(0, -1) : child;
}
