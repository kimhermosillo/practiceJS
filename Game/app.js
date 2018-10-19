var scores, roundScore, activePlayer, dice

scores = [0, 0]
roundScore = 0
activePlayer = 0
dice = 0

dice = Math.floor(Math.random() *6) + 1


// document.querySelector('#current-' + activePlayer).textContent = dice
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' *****makes it italic
// var x = document.querySelector('#score-0').textContent
// console.log(x)

document.querySelector('.dice').style.display = 'none'

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function () {
  // RANDOM NUMBER
  var dice = Math.floor(Math.random() * 6) + 1
  // DISPLAYING RESULT
  var diceDOM =   document.querySelector('.dice')
  diceDOM.style.display = 'block'
  diceDOM.src = 'dice-' + dice + '.png'
  //UPDATE ROUND SCORE IF THE ROLLED NO WASN'T 1
  if (dice !== 1) {
    //adding score
    roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore
  } else {
    //other player
    nextPlayer()
  } 
})

document.querySelector('.btn-hold').addEventListener('click', function() {
  // ADD CURRENT SCORE TO GLOBAL SCORE
  scores[activePlayer] += roundScore

  
  // UPDATE UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
  // PLAYER WINS GAME

  // NEXT PLAYER
  nextPlayer()
})

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0

  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1').classList.toggle('active')

  document.querySelector('dice').style.display = 'none'
}