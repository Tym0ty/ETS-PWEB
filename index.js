const xhr = new XMLHttpRequest();
const url = `http://apilayer.net/api/live?access_key=b8c58d2160d9203609ebaa86b942fcf9&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR`;

xhr.open('GET', url, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const rate = data.quotes;
        const input = ["EURUSD","EURGBP", "GBPUSD", "USDJPY","USDCHF", "USDCAD", "USDZAR","AUDUSD","NZDUSD"];
        input.map((curr)=>{
        document.getElementById(curr).innerText = rate[curr];
    })
        console.log(data);
    } else {
        alert('Error fetching weather data. Please try again.');
    }
};

xhr.send();