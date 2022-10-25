const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const param1 = urlParams.get('symbol');



async function companyResults() {

    const symbol = param1;
    const url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/"
    const response = await fetch(url + symbol);
    const result = await response.json();

    stopSpinner();
    
    document.getElementById("compImage").innerHTML = '<img src="' + result.profile.image + '">';
    document.getElementById("compName").innerHTML = result.profile.companyName + ' (' + result.profile.sector + ')';
    document.getElementById("compPrice").innerHTML = "Stock Price: $" + result.profile.price;
    // document.getElementById("compChanges").innerHTML =  ' (' + result.profile.changesPercentage + '%)';
    const changesPercentage = document.getElementById("compChanges");
        if (changesPercentage >= 0) {
            changesPercentage.innerHTML = ' (-' + result.profile.changesPercentage + '%)';
            changesPercentage.style.color = "red";
        } else {
            changesPercentage.innerHTML = ' (+' + result.profile.changesPercentage + '%)';
            changesPercentage.style.color = "green"
        }
    document.getElementById("compDescription").innerHTML = result.profile.description;
};

        async function stockHistoryResults() {
            const response = await fetch(
"https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/" + param1 + "?serietype=line");
            const data = await response.json();
            length = data.historical.length;
  
            labels = [];
            values = [];
            for (let i = length - 1; i >= 0; i--) {
                labels.push(data.historical[i].date);
                values.push(data.historical[i].close);
            }
  
  
            new Chart(document.getElementById("stockChart"), {
                
                type: 'line',
               
                data: {
                    labels: labels,
                    datasets: [
                        {
                            backgroundColor: ["#3e95cd"],
                            data: values
                    
                        }
                    ]
                },
                options: {
                
                          
                    maintainAspectRatio: false,
                    fill: true
                }
            });
  
        }

window.onload = function() {
    companyResults();
    addSpinner();
    stockHistoryResults();
};

function addSpinner() {
    document.getElementsByClassName('loader')[0].style.display = 'block';
}

function stopSpinner() {
    document.getElementsByClassName('loader')[0].style.display = 'none';
}

// class CompanyInfo { 
//     constructor(companyObject) { 
//         this.name = companyObject.Name;
//         this.symbol = companyObject.Symbol;
//         this.currency = companyObject.Currency;
//         this.stockExchange = companyObject.StockExchange;
//         this.exchangeShortName = companyObject.ExchangeShortName;
//     }
// }

//     const CAN = {
//        "name" : "Canaan Inc.",
//        "symbol" : "CAN",
//        "currency" : "USD",
//        "stockExchange" : "NASDAQ Global Market",
//        "exchangeShortName" : "NASDAQ"
//    };
   
//    const PAA = {
//        "symbol":"PAA",
//        "name":"Plains All American Pipeline, L.P.",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Select",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const AAL = {
//        "symbol":"AAL",
//        "name":"American Airlines Group Inc.",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Select",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const RAAC = {
//        "symbol":"RAAC",
//        "name":"Revolution Acceleration Acquisition Corp",
//        "currency":"USD",
//        "stockExchange":"Nasdaq Global Select",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const MAAC = {
//        "symbol":"MAAC",
//        "name":"Montes Archimedes Acquisition Corp.",
//        "currency":"USD",
//        "stockExchange":"Nasdaq Capital Market",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const AAME = {
//        "symbol":"AAME",
//        "name":"Atlantic American Corporation",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Market",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const OHAA = {
//        "symbol":"OHAA",
//        "name":"OPY Acquisition Corp. I",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Market",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const MCAA = {
//        "symbol":"MCAA",
//        "name":"Mountain & Co. I Acquisition Corp.",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Market",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const FWAA = {
//        "symbol":"FWAA",
//        "name":"Fifth Wall Acquisition Corp. I",
//        "currency":"USD","stockExchange":"Nasdaq Capital Market",
//        "exchangeShortName":"NASDAQ"
//    };
   
//     const PRAA = {
//        "symbol":"PRAA",
//        "name":"PRA Group, Inc.",
//        "currency":"USD",
//        "stockExchange":"NASDAQ Global Select","exchangeShortName":"NASDAQ"}



// // window.onload = async function() {

// //     console.log("stockClicked", urlParams)
// // }
// //     const params = new URLSearchParams(location.search);
// //     const symbol = params.get('symbol');
// //     const compInfo = new CompanyInfo(document.getElementById('compInfo'), symbol);
// //     await compInfo.onload();
// //     await compInfo.addChart();
// // }();

