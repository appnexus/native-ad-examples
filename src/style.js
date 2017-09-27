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
		imgOverlay: {
			position: 'relative',
		},
	},
	'headline': {
		'font-weight': 'bold',
		'font-size': '1.3em'
	},
	'sponsorWrapper': {
		'font-size': '0.8em'
	},
	'sponsorLabel': {
		'font-weight': 'bold'
	},
	'cta': {
		'text-decoration': 'none',
		padding: '3px',
		color: '#000',
		background: '#fff',
		border: '1px solid #000',
		'font-size': '1.2em',
	},
	'body': {
		margin: '5px 0'
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
			bottom: 0
		},
		'logo': {
			position: 'absolute',
			bottom: '3px',
			right: '3px',
		},
		'headline': {
			position: 'absolute',
			'text-align': 'center',
			top: '13px',
			left: 0,
			right: 0,
		},
		'sponsorWrapper': {
			position: 'absolute',
			bottom: '3px',
			left: '3px',
		},
		'cta': {
			position: 'absolute',
			bottom: '25%',
			left: '60px',
			right: '60px',
			border: 0,
			'text-align': 'center',
		}
	}, 
}