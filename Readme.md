# postcss-deadclass

Given an array of HTML file names, this class will remove `class` properties for CSS classes that do not exist in the CSS being processed. It's pretty much the opposite of [postcss-uncss](https://github.com/RyanZim/postcss-uncss).

## Installation

~~~ bash
npm install --save-dev postcss-deadclass
~~~

## Usage

This plugin takes one option, `htmlFiles`, an array of HTML file paths.

Usage:

~~~ javascript
postcss([
	require('postcss-deadclass')({
		htmlFiles: glob('**/*.html')
	})
])
~~~

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Dependencies

* Cheerio
* Lodash
* Glob
* PostCSS