

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const dice = document.getElementById('dice');
const diceImage = document.getElementById('diceImage');

dice.addEventListener('click', function() {
    const randomNumber = rollDice(); 
    diceImage.src = `./img/${randomNumber}.png`;  
});
