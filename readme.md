# array-to-map [![npm version](https://badge.fury.io/js/%40gaiama%2Farray-to-map.svg)](https://badge.fury.io/js/%40gaiama%2Farray-to-map) [![Build Status](https://travis-ci.org/GaiAma/array-to-map.svg?branch=master)](https://travis-ci.org/GaiAma/array-to-map)


## Install

```
$ yarn add @gaiama/array-to-map
or
$ npm install @gaiama/array-to-map
```


## Usage

```js
const arrayToMap = require('array-to-map');
const array = [
  { id: 'first', title: 'The first item' },
  { id: 'second', title: 'The second item' },
]
arrayToMap(array);
//=> { first: { id: 'first', title: 'The first item' }, second: { id: 'second', title: 'The second item' } }

const array = [
  { slug: 'the-first-item', title: 'The first item' },
  { slug: 'the-second-item', title: 'The second item' },
]
arrayToMap(array, 'slug');
//=> { 'the-first-item': { slug: 'the-first-item', title: 'The first item' }, 'the-second-item': { slug: 'the-second-item', title: 'The second item' } }
```


## API

### arrayToMap(input, property)

#### input

Type: `array`

Array of objects

##### property

Type: `string`<br>
Default: `id`

If your objects don't contain an id property or you want to map them to a different key specify as second argument


## License

MIT © [GaiAma](https://github.com/GaiAma)
