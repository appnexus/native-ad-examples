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

handlebars.registerHelper('interpolate-ad-markup', function() {
	return new handlebars.SafeString(this.adMarkup);
});

const items = adGallery.map((item) => {
	const templateFile = fs.readFileSync(`./src/templates/${item.template}.hbs`, 'utf-8')
	const template = handlebars.compile(templateFile);

	return Object.assign({}, item, {
		adMarkup: template(sampleAd)
	});
});

fs.writeFileSync('./index.html', indexTemplate({ items }));