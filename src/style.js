/**
 * I probably could have written a css parser, but instead this:
 */
module.exports = {
	'ad': {
		root: {
			display: 'block',
			'font-family': 'Helvetica Neue, Helvetica, Arial, sans-serif'
		},
		stacked: {
			'max-width': '200px',
		},
		'stacked-text': {
			'max-width': '400px',	
		},
		imgOverlay: {
			position: 'relative',
		},
	},
	'headline': {
		'font-weight': 'bold',
		'font-size': '1.3em'
	},
	'sponsorWrapper': {
		color: '#999999',
		'font-size': '0.8em',
		'font-style': 'italic',
	},
	'sponsorLabel': {
		'font-weight': 'bold',
	},
	'cta': {
		'text-decoration': 'none',
		padding: '3px',
		color: '#fff',
		background: '#00d7c8',
		'font-size': '1.2em',
		'border-radius': '2px',
	},
	'body': {
		margin: '5px 0',
	},

	/* vanilla left-floated image */

	'imgLeft': {
		'img': {
			float: 'left',
			'margin-right': '5px',
		}
	},

	/* overlayed image styles */

	'overlayContent': {
		root: {
			position: 'absolute',
			color: '#fff',
			width: '320px',
			top: 0,
			bottom: 0,
		},
		'logo': {
			position: 'absolute',
			top: '5px',
			left: '5px',
			width: '25px',
		},
		'headline': {
			position: 'absolute',
			'text-align': 'center',
			bottom: '35%',
			left: 0,
			right: 0,
			'text-shadow': '1px 1px 3px #666666',
		},
		'sponsorWrapper': {
			'margin-bottom': '5px',
		},
		'cta': {
			position: 'absolute',
			bottom: '13%',
			left: '100px',
			right: '100px',
			border: 0,
			'text-align': 'center',
		}
	}, 
}