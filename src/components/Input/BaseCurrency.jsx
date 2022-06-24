import React from 'react';
import './Input.css';

export default class BaseCurrency extends React.Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">
					<input
						disabled={this.props.isDisabled}
						onInput={this.props.onInput}
						type="number"
						value={this.props.baseAmount} />
					<select
						onChange={this.props.onChange}
						id="base"
						name="base-currency"
						defaultValue={null}
						onChange={this.props.onChange} >
						<option
							className="default-option"
							value="CAD">
							CAD: Canadian Dollar
						</option>
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

