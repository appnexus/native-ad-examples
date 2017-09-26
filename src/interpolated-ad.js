const safeInterpolate = (name) => `'+${name}+'`;

module.exports = {
	imgSrc: safeInterpolate('imgSrc'),
	videoSrc: safeInterpolate('videoSrc'),
	iconSrc: safeInterpolate('iconSrc'),
	title: safeInterpolate('title'),
	sponsor: safeInterpolate('sponsor'),
	body: safeInterpolate('body'),
	ctaText: safeInterpolate('ctaText'),
	clickUrl: safeInterpolate('clickUrl')
}