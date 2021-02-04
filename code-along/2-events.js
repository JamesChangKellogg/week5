// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener

// addEvenListener (what are we listening for?, function
// DOMContentLoaded = the page got loaded
// function = what are we going to do? - always take event as a parameter
window.addEventListener('DOMContentLoaded', function(event) {

    // When click me button is clicked, flags alert
    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click', function(event) {
        event.preventDefault()                          // needed to prevent changes to browser
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend', '<p> The button was clicked!</p>')
    })

    // // When Google button is clicked, flag alert
    let googleButton = document.querySelector('.google-link')
    googleButton.addEventListener('click', function(event) {
        event.preventDefault()                          // needed to prevent going to Google.com
        let output = document.querySelector('.output')
        output.insertAdjacentHTML('beforeend', '<p> The Google button was clicked!</p>')
    })

    // Write first name into field'
    // 'keyup' event = whenever a keyboard key is lifted up
    let firstNameInput = document.querySelector('#firstName')
    firstNameInput.addEventListener('keyup',function(event) {
        // console.log(firstNameInput.value)
        let greetElement = document.querySelector('#greet') // find ID = greet
        if (firstNameInput.value.length > 0) {
            greetElement.innerHTML = `Hi, ${firstNameInput.value}`
        } else {
            greetElement.innerHTML = ``
        }
    })   
})