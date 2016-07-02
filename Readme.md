# postcss-deadclass

Given an array of HTML file names, this class will remove class properties for CSS classes that do not exist in the CSS being processed.

It's pretty much the opposite of [postcss-uncss](https://github.com/RyanZim/postcss-uncss).

## Installation

~~~ bash
npm install --save-dev postcss-deadclass
~~~

## Usage

This plugin takes two options:

### htmlFiles

An array of HTML file paths, such as one you might generate using [node-glob](https://github.com/isaacs/node-glob).

### classesToKeep

An array of CSS class names to preserve, even if they aren't found in the document. They can be in the form of either `classname` or `.classname`.

### Example

Usage:

~~~ javascript
postcss([
	require('postcss-deadclass')({
		htmlFiles: glob('**/*.html'),
		classesToKeep: [
			'apple',
			'.banana',
			'orange'
		]
	})
])
~~~

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Dependencies

* Cheerio
* Lodash
* PostCSS

## Todo

* Add an override method
* PhantomJS