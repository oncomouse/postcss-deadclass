# postcss-deadclass

Given an array of HTML file names, this class will remove `class` properties for CSS classes that do not exist in the CSS being processed. It's pretty much the opposite of [postcss-uncss](https://github.com/RyanZim/postcss-uncss).

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
