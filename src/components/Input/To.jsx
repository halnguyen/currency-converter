import { Component } from 'react';
import './Input.css';

export default class To extends Component {
	render() {
		return (
			<div className="form-container">

				<form action="/index.html">

					<input
						disabled={this.props.isDisabled}
						onInput={this.props.onInput}
						type="number"
						value={this.props.targetAmount} />
					<select
						id="target"
						name="target-currency"
						defaultValue={"USD"}
						onChange={this.props.onChange} >
						<option
							className="default-option"
							value="USD">USD: United State of America</option>
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

