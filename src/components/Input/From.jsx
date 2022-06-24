import React from 'react';
import './Input.css';

export default class From extends React.Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">
					<input
						disabled={this.props.isDisabled}
						onInput={this.props.onInput}
						type="number"
						defaultValue={0}
						value={this.props.baseAmount}
						id="from-amount" />
					<select
						defaultValue="CAD"
						onChange={this.props.onChange}
						id="base"
						name="base-currency"
						onChange={this.props.onChange} >
						{
							// Generating symbols
							this.props.symbols.map(symbol => {
								return (
									<option
										key={symbol.code}
										value={symbol.code}>
										{symbol.code}: {symbol.description}
									</option>
								);
							})
						}
					</select>
				</form>
			</div>
		);
	}
}

