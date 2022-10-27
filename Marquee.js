marqueeStocks();

async function marqueeStocks() {
    const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=63ce29e954a5731b77ccf40f124b41b2"
    const response = await fetch(url);
    const result = await response.json();
    const marqueeContainer = document.getElementById("marqueeNav");
    let marqueeResult = result;
    try {
        for (let i = 45000; i < marqueeResult.length; i++) {
            let currentResult = marqueeResult[i];
            marqueeContainer.innerHTML += ( currentResult.symbol + ': ' + '<span>' + '$' + currentResult.price + '</span>' + ' ');        
        }
    } catch (error) {
        console.error(error);
    }  
}      