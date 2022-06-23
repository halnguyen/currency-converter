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
					<input
						onChange={this.props.onChange}
						id="to"
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

