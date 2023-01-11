async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,AAPL&interval=1min&apikey=f5d9fc2596d3404ea90590841172e832');
    const data = await response.json();
    console.log(data)

    const { GME, MSFT, DIS, AAPL } = mockData;

    const stocks = [GME, MSFT, DIS, AAPL];
    
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
}

main()