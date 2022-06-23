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
						<option value="USD">US Dollar (USD)</option>
					</datalist>

				</form>

			</div>
		);
	}
}

