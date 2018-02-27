import test from 'ava';
import m from '.';

test('equals map using defaults', t => {
	const array = [
		{ id: 'first', title: 'The first item' },
		{ id: 'second', title: 'The second item' },
	];
	const map = new Map();
	map.set("first", { id: "first", title: "The first item" });
	map.set("second", { id: "second", title: "The second item" });
	t.deepEqual(m(array), map);
});

test('equals map using custom property', t => {
	const array = [
		{ slug: 'the-first-item', title: 'The first item' },
		{ slug: 'the-second-item', title: 'The second item' },
	];
	const map = new Map();
	map.set("the-first-item", { slug: "the-first-item", title: "The first item" });
	map.set("the-second-item", { slug: "the-second-item", title: "The second item" });
	t.deepEqual(m(array, 'slug'), map);
});
