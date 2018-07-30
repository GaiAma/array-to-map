# array-to-map [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![npm version](https://badge.fury.io/js/%40gaiama%2Farray-to-map.svg)](https://badge.fury.io/js/%40gaiama%2Farray-to-map) [![Build Status](https://travis-ci.org/GaiAma/array-to-map.svg?branch=master)](https://travis-ci.org/GaiAma/array-to-map) [![codecov](https://codecov.io/gh/GaiAma/array-to-map/branch/master/graph/badge.svg)](https://codecov.io/gh/GaiAma/array-to-map)


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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/3068958?v=4" width="100px;"/><br /><sub><b>Valentin Bucur</b></sub>](https://github.com/raven78)<br />[📖](https://github.com/GaiAma/array-to-map/commits?author=raven78 "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [GaiAma](https://github.com/GaiAma)