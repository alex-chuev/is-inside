# is-inside

This simple lib checks whether the path is inside the directory or not.

## Installation

`npm i --save is-inside`

## Usage

```
const isInside = require('is-inside');

console.log(isInside('folder/file', 'folder')); // true
console.log(isInside('file', '/')); // true
console.log(isInside('file', 'folder')); // false
```

## Comparison of paths

How the library compares paths can be viewed in [test.js file](test.js).

## Dependencies

The library depends only on Node's `path` module. There are no external dependencies.

## TypeScript

You can use it with TypeScript thanks to the added d.ts file.
