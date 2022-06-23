import { Component } from 'react';
import './SwapButton.css';

export default class SwapButton extends Component {
	render() {
		return (
			<button type="button">
				<ion-icon
					name="swap-vertical-outline"
					title="exchange"></ion-icon>
			</button>
		);
	}
}

