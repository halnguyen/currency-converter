import React from 'react';
import './Input.css';

export default class From extends React.Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">

							<input
								type="number"
								defaultValue={this.props.fromAmount}
								id="from-amount" />
							<input
								onChange={this.props.onChange}
								id="from"
								type="text"
								list="currency-selector" />
							<datalist id="currency-selector" >
								<option value="USD">US Dollar (USD)</option>
							</datalist>

				</form>

			</div>
		);
	}
}

