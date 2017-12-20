import { Component } from 'react';
import { canUseDom } from '../utils';

class LockYScroll extends Component {
	componentWillMount () {
		if (!canUseDom) return;
		let body = document.querySelector('body');
		body.classList.add('lightbox-y-scroll-lock');
	}
	componentWillUnmount () {
		if (!canUseDom) return;
		let body = document.querySelector('body');
		body.classList.remove('lightbox-y-scroll-lock');
	}
	render () {
		return null;
	}
}

export default LockYScroll;
