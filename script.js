<<<<<<< HEAD
marqueeStocks();

const searchButton = document.getElementById('searchButton');
=======
const searchButton = document.getElementById('searchButton')
>>>>>>> f7f0bddfe003885946077b85a0bed36fe1bc7d96

searchButton.addEventListener('click', () => {
    document.getElementById("tableResults").innerHTML = '';
    searchResults()
    addSpinner();
});

async function searchResults() {
    const symbol = document.getElementById('searchTerm').value;
    const url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query="+ symbol + "&limit=10&exchange=NASDAQ"
    const response = await fetch(url)
    const result = await response.json();

   

<<<<<<< HEAD
    // companyResults();
    stopSpinner();
    
    const tableResults = document.getElementById("tableResults");
    let searchResults = result;
    try {
        for (let i = 0; i < searchResults.length; i++) {
            let currentResult = searchResults[i];
            tableResults.innerHTML += ('<img src="https://financialmodelingprep.com/images-New-jpg/' + currentResult.symbol + '.jpg"> ' + "<a href='company.html?symbol=" + currentResult.symbol +"'>"  + currentResult.name  + ' </a>' + '(' + currentResult.symbol + ')');

            const url2 = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/" + currentResult.symbol;
            const response2 = await fetch(url2);
            const result2 = await response2.json();
            let compResults = result2;
            
            tableResults.innerHTML += " (" + compResults.profile.changesPercentage + "%)" + '<hr>';
            // const priceSpan = document.getElementById("priceSpan")
            // if (compResults.profile.changesPercentage >= 0) {
            //     tableResults.innerHTML = ' (+' + compResults.profile.changesPercentage[i] + '%)' + '<hr>';
            //     tableResults.style.color = "green";
            // } else {
            //     tableResults.innerHTML = ' (' + compResults.profile.changesPercentage[i] + '%)' + '<hr>';
            //     tableResults.style.color = "red";
            // }
        }
    } catch (error) {
        console.error(error);
    }

    // async function companyResults() {
    //     const url2 = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/";
    //     const response2 = await fetch(url2 + currentResult.symbol);
    //     console.log(response2)
    //     const result2 = await response2.json();
    //     let compResults = result2;
    //             const tableResults = document.getElementById("tableResults");

    //     try {
    //         for (let i = 0; i < compResults.length; i++) {
    //             let currentResult = compResults[i];
    //             tableResults.innerHTML() += '$' + currentResult.profile.price;
    //         }
    //     } catch (error) {
    //     console.error(error);
    //     }
    // }
=======
function searchResults() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        stopSpinner();
        
        let text = this.response;
        let result = "";
        
        JSON.parse(text).forEach(value => result += "<a href='company.html?symbol=" + value.symbol +"'>" + value.name + "  " + '(' + value.symbol + ') </a>  <hr>')
        

        document.getElementById("tableResults").innerHTML = result;
        }
    };

    xmlhttp.open("GET", "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ", true);
    xmlhttp.send();
>>>>>>> f7f0bddfe003885946077b85a0bed36fe1bc7d96
}


            
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

function addSpinner() {
    document.getElementsByClassName('loader')[0].style.display = 'block';
}

function stopSpinner() {
    document.getElementsByClassName('loader')[0].style.display = 'none';
}

window.onload = function() {
    document.getElementById('searchTerm').value = '';
};

