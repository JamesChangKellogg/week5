// 1. find form element
// 2. add event listener on form submit
// 3. on submit event:
//    a. get data from API URL 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//    b. calculate total bitcoin value in USD currency
//    c. modify output to display `Your _____ Bitcoin is worth ________ USD`

window.addEventListener('DOMContentLoaded', function () {
  let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
  let bitcoinForm = document.querySelector('.bitcoin-form')
  bitcoinForm.addEventListener('submit', async function(event) {    // need to include async function here to use await
    event.preventDefault()

    // use fetch to acquire data from api | await needs async function
    let response = await fetch(url)
    let json = await response.json()

    let currentPriceUSD = json.bpi.USD.rate_float // extract bitcoin rate
    let amountInput = document.querySelector('#amount') // element with ID of amount
    let amount = amountInput.value
    let totalValue = amount * currentPriceUSD

    let output = document.querySelector('.output')
    output.innerHTML = `You have $${totalValue} worth of Bitcoin`
  })
})
