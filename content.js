'use strict';
const $ = document.querySelector.bind(document);

function infinitelyMore() {
	const btn = $('.more-button');

	if (!btn) {
		return;
	}

	const wHeight = window.innerHeight;
	const wScroll = window.pageYOffset || document.scrollTop;

	const btnOffset = $('.more-button').getBoundingClientRect().top + document.body.scrollTop;

	if (wScroll > (btnOffset - wHeight)) {
		btn.click();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', infinitelyMore);
	window.addEventListener('resize', infinitelyMore);
});
