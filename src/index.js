import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
	const div = document.createElement('div');
	const btn = document.createElement('button');

	// Lodash, now imported by this script
	div.innerHTML = _.join(['Hello', 'Webpack'], ' ');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	div.appendChild(btn);
	return div;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

// hot module replacement
if (module.hot) {
	module.hot.accept('./print.js', () => {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(element);
		element = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(element);
	});
}
