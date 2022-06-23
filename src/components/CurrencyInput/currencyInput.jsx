import { Component } from 'react';
import './currencyInput.css';


export default class CurrencyInput extends Component {
	render() {
		return (
			<div className="form-container">
				<form action="/index.html">

					<div className="container">
						<label htmlFor="from">From:</label>
						<input id="from" type="text" list="currency-selector" />
						<datalist id="currency-selector" >
							<option value="USD">US Dollar (USD)</option>
						</datalist>
					</div>

					<button type="button">
						<ion-icon name="repeat-outline" title="exchange"></ion-icon>
					</button>

					<div className="container">
						<label htmlFor="to">To:</label>
						<input id="to" type="text" list="currency-selector" />
						<datalist id="currency-selector" >
							<option value="USD">US Dollar (USD)</option>
						</datalist>
					</div>

					<div></div>

					<div className="container">
						<div className="amount-container">
							<label htmlFor="amount">$</label>
							<input id="amount" type="number" defaultValue={0.00} />
						</div>
					</div>

				</form>


			</div>
		);
	}
}
