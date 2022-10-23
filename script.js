<<<<<<< HEAD
=======

// const url = 'https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ'

>>>>>>> 66016c62cfa2ca4e8a42cec735fc7d40f1b496a8
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', () => {
    searchResults();
    addSpinner();
});



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

<<<<<<< HEAD
=======
    

>>>>>>> 66016c62cfa2ca4e8a42cec735fc7d40f1b496a8
    xmlhttp.open("GET", "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ", true);
    xmlhttp.send();
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