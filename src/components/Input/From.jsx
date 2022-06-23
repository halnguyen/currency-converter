import React from 'react';
import './Input.css';

export default class From extends React.Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">

					<input
						type="number"
						defaultValue={this.props.baseAmount}
						id="from-amount" />
					<input
						onChange={this.props.onChange}
						id="from"
						type="text"
						list="currency-selector" />
					<datalist id="currency-selector" >
						{
							// Generating symbols
							this.props.symbols.map(symbol => {
								return (
									<option key={symbol.code} value={symbol.code}>{symbol.description}</option>
								);
							})
						}
					</datalist>

				</form>

			</div>
		);
	}
}

