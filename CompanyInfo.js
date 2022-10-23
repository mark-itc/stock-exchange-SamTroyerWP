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
    document.getElementById("compPrice").innerHTML = "Stock Price: $" + result.profile.price + ' (' + result.profile.changesPercentage + '%)';
    document.getElementById("compDescription").innerHTML = result.profile.description;
};

async function stockHistoryResults() {
    // function stockHistoryResults() {
    const symbol = param1;
    const url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/" + symbol + "?serietype=line"
    const response =  await fetch(url, addData);
    const result =  await response.json();


   const dataPoints = [];
   const ctx = document.getElementById('myChart');
   
   const chart = new Chart(ctx, {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Stock Price History"
    },
    axisY: {
        title: "",
        includeZero: true
    },
    data: [{
        type: "line",
        yValueFormatString: "##",
        dataPoints: dataPoints
    }]
   });

    function addData(data) {
        for (let i = 0; i < data.length; i++) {
            dataPoints.push({
                x: new Date(data[i].date),
                y: data[i].units
            });
        };
        document.getElementById('myChart').innerHTML = result.chart.render();

    }   
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

