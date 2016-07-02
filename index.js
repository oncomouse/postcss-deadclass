var cheerio = require('cheerio');
var fs = require('fs');
var postcss = require('postcss');
var _ = require('lodash');

module.exports = postcss.plugin('remove-dead-class-calls', (opts) => {
	opts = opts || {
		htmlFiles: []
	};
	return (css, results) => {
		var selectors = [];
		css.walkRules(rule => {
			_.each(rule.selector.toString().split(','), (segment) => {
				_.each(segment.split(/(?: |\+|>)/g), (r) => {
					if(r.indexOf(':') >= 0) {
						return;
					}
					if(r.charAt(0) === '.') {
						selectors.push(r);
					} else if(r.indexOf('.') >= 0) {
						var s = r.split('.');
						s.shift();
						_.each(s, (v) => selectors.push('.' + v));
					}
				})
			})
		});
		selectors = _.uniq(selectors);
		_.each(opts.htmlFiles, (htmlFile) => {
			var $ = cheerio.load(fs.readFileSync(htmlFile));
			$('*').each((i,el) => {
				if(typeof $(el).attr('class') === 'undefined') { return }
				var classesToRemove = _.filter($(el).attr('class').split(/ /), (cn) => !selectors.includes('.' + cn));
				_.each(classesToRemove, (c) => {
					$(el).removeClass(c);
				})
			});
			fs.writeFileSync(htmlFile, $.html().replace(/ class=\"\"/g,''));
		});
	}
})