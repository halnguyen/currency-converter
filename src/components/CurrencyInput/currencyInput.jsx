import { Component } from 'react';
import './currencyInput.css';


export default class CurrencyInput extends Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">

					<div className="currencyFrom currency-container">
						<label htmlFor="currency-selector">From</label>
						<input type="text" list="currency-selector" />
						<datalist id="currency-selector" >
							<option value="USD">US Dollar (USD)</option>
						</datalist>
					</div>

					<button type="button">
						<ion-icon name="swap-horizontal-outline"></ion-icon>
					</button>

					<div className="currencyTo currency-container">
						<label htmlFor="currency-selector">To</label>
						<input type="text" list="currency-selector" />
						<datalist id="currency-selector" >
							<option value="USD">US Dollar (USD)</option>
						</datalist>
					</div>

				</form>
			</div>
		);
	}
}
