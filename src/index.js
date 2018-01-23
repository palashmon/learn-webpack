import _ from 'lodash';
import './style.css';
import Logo from './logo.svg';

function component() {
	const element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	const myLogo = new Image();
	myLogo.src = Logo;
	myLogo.classList.add('logo');
	element.appendChild(myLogo);

	return element;
}

document.body.appendChild(component());
