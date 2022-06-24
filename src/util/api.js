// Fetching Currency API from https://exchangerate.host/#/#our-services

const GetAPI = {
  url: "https://api.exchangerate.host/",

  async getSymbols() {
    // Fetching all supported symbols
    // Return a promise
    const symbolsRaw = await fetch(GetAPI.url + "symbols");
    try {
      const symbols = await symbolsRaw.json();
      return await Object.entries(symbols.symbols);
    } catch(error) {
      console.log(error);
    }
  },

  async getRate(baseSymbol, targetSymbol) {
    // Fetching rates from base and target symbols
    // Returns a promise
    const response = await fetch(GetAPI.url + `latest?base=${baseSymbol}&symbols=${targetSymbol}`);
    try {
      const rateJSON = await response.json();
      const rate = await Object.values(rateJSON.rates);
      return await rate[0];
    } catch(error) {
      console.log(error);
    }
  }
};

export default GetAPI;
