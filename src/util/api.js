// Fetching Currency API from https://exchangerate.host/#/#our-services

const GetAPI = {
  url: "https://api.exchangerate.host/",
  async getSymbols() {
    // Fetching all supported symbols
    // Return a promise
    const symbolsRaw = await fetch(GetAPI.url + "symbols");
    const symbols = await symbolsRaw.json();
    return symbols.symbols;
  },
  async getRate(fromSymbol, toSymbol) {
    // Fetching rates from base and target symbols
    // Returns a promise
    const rate= await fetch(GetAPI.url + `latest?base=${fromSymbol}&symbols=${toSymbol}`);
    return await rate.json();
  }
};


// GetAPI.getRate('USD', 'CAD').then(resp => console.log(resp));
GetAPI.getSymbols().then(response => {
  console.log(Object.keys(response));
  console.log(response);
} );

export default GetAPI;
