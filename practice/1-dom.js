function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {

  // 1. use getRandomInt(6) to randomize dice values
  // 2. find the dice element
  // 3. replace the element's inner html with new html using the dice values above

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️

  let die1 = getRandomInt(6)
  let die2 = getRandomInt(6)

  // manipulate the div class with 'dice'
  let diceElement = document.querySelector('.dice') // get document with class name '.dice' 

  // use template literal to insert variables
  diceElement.innerHTML =`
  <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
  <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">
  `

  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
