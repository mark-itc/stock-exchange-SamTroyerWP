(async function () {
    const params = new URLSearchParams(location.search);
    const symbol = params.get('symbol');
    const compInfo = new CompanyInfo(document.getElementById('compInfo'), symbol);
    await compInfo.load();
    await compInfo.addChart();
})();

let companies = [
 CAN = {
    "name" : "Canaan Inc.",
    "symbol" : "CAN",
    "currency" : "USD",
    "stockExchange" : "NASDAQ Global Market",
    "exchangeShortName" : "NASDAQ"
},

PAA = {
    "symbol":"PAA",
    "name":"Plains All American Pipeline, L.P.",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Select",
    "exchangeShortName":"NASDAQ"
},

 AAL = {
    "symbol":"AAL",
    "name":"American Airlines Group Inc.",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Select",
    "exchangeShortName":"NASDAQ"
},

 RAAC = {
    "symbol":"RAAC",
    "name":"Revolution Acceleration Acquisition Corp",
    "currency":"USD",
    "stockExchange":"Nasdaq Global Select",
    "exchangeShortName":"NASDAQ"
},

 MAAC = {
    "symbol":"MAAC",
    "name":"Montes Archimedes Acquisition Corp.",
    "currency":"USD",
    "stockExchange":"Nasdaq Capital Market",
    "exchangeShortName":"NASDAQ"
},

 AAME = {
    "symbol":"AAME",
    "name":"Atlantic American Corporation",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Market",
    "exchangeShortName":"NASDAQ"
},

 OHAA = {
    "symbol":"OHAA",
    "name":"OPY Acquisition Corp. I",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Market",
    "exchangeShortName":"NASDAQ"
},

 MCAA = {
    "symbol":"MCAA",
    "name":"Mountain & Co. I Acquisition Corp.",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Market",
    "exchangeShortName":"NASDAQ"
},

 FWAA = {
    "symbol":"FWAA",
    "name":"Fifth Wall Acquisition Corp. I",
    "currency":"USD","stockExchange":"Nasdaq Capital Market",
    "exchangeShortName":"NASDAQ"
},

 PRAA = {
    "symbol":"PRAA",
    "name":"PRA Group, Inc.",
    "currency":"USD",
    "stockExchange":"NASDAQ Global Select","exchangeShortName":"NASDAQ"}]