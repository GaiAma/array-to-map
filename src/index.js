'use strict';

export default (array, property = 'id') =>
	new Map(array.map(item => [item[property], item]));
