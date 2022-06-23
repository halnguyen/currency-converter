import { Component } from 'react';
import './Input.css';

export default class To extends Component {
	render() {
		return (
			<div className="form-container">

				<form action="/index.html">

					<input
						type="number"
						defaultValue={this.props.toAmount}/>
					<select
						onChange={this.props.onChange}
						id="target"
						name="target-currency"
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

