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

const codeFile = fs.readFileSync('./src/templates/code-snippet.hbs', 'utf-8');
const codeTemplate = handlebars.compile(codeFile);

const adGallery = require('../src/ad-gallery.js');
const sampleAd = require('../src/sample-ad.js');
const interpolatedAd = require('../src/interpolated-ad.js');
const style = require('../src/style.js');

const adCall = fs.readFileSync('./src/ad-call.js', 'utf-8');

/**
 * Wraps blocks of javascript in script tags
 */
handlebars.registerHelper('render-script', function(script) {
	return `<script type="text/javascript">
${script}
</script>`;
});

/**
 * Returns a sample code block
 */
 handlebars.registerHelper('interpolate-ad-code', function() {
 	return new handlebars.SafeString(this.adCode);
 });

/**
 * This returns formatted html as a safestrng so that it will be put on the template to render a fake ad
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
	const codeMarkupData = Object.assign({}, interpolatedAd, { style });

	return Object.assign({}, item, {
		adMarkup: template(markupData),
		// we remove the tabs and newlines from the markup we put into the ad code sample
		adCode: codeTemplate({ adMarkup: template(codeMarkupData).replace(/(\n|\t|\s\s)/g, '') })
	});
});

fs.writeFileSync('./index.html', indexTemplate({ items, adCall }));