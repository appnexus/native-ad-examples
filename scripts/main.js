#!/usr/bin/env node

/**
 * The purpose of this script is to create a single static asset to be served on our gallery page
 * The idea is to inject ad code onto the page such that it both renders the sample output and also
 * provides a working snippet that serves an ad
 */

const handlebars = require('handlebars');
const fs = require('fs');

const indexFile = fs.readFileSync('./src/templates/index.hbs', 'utf-8');
const indexTemplate = handlebars.compile(indexFile);

const adGallery = require('../src/ad-gallery.js');
const sampleAd = require('../src/sample-ad.js');
const style = require('../src/style.js');

/**
 * This returns formatted html as a safestrng so that it will be put on the template either for markup or code samples
 */
handlebars.registerHelper('interpolate-ad-markup', function() {
	return new handlebars.SafeString(this.adMarkup);
});

/**
 * All kinds of style goodness so ad units can be self-contained
 * Takes a list of styles an turns it into a style attribute
 */
handlebars.registerHelper('stylr', function(...styles) {
	const styleString = styles
		// we want all but the last meta argument of the helper, hence the slice
		.slice(0, -1)
		.map((style) => 
			Object.keys(style).reduce(
				(acc, rule) => `${acc}${rule}:${style[rule]};`,
				''
			)
		)
		.join('');
	return new handlebars.SafeString(`style="${styleString}"`);
});

const items = adGallery.map((item) => {
	const templateFile = fs.readFileSync(`./src/templates/${item.template}.hbs`, 'utf-8')
	const template = handlebars.compile(templateFile);
	const markupData = Object.assign({}, sampleAd, { style });

	return Object.assign({}, item, {
		adMarkup: template(markupData)
	});
});

fs.writeFileSync('./index.html', indexTemplate({ items }));