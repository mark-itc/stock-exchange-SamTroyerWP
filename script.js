
const searchButton = document.getElementById('searchButton');

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
            highlight();

        }
    } catch (error) {
        console.error(error);
    }

}

function highlight() {
    let ob = new Mark(document.querySelector(".table-results"));
    ob.unmark();
    ob.mark(
        document.getElementById("searchTerm").value,
        {className: 'a'}
    );
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

