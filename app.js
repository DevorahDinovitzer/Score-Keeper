const player1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0
}

const player2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0
}



const resetButton = document.querySelector('#resetButton')
const playtoSelect = document.querySelector('#playto')
let winningScore = 5;
let isGameOver = false;


player1.button.addEventListener('click', function () {
    updateScore(player1, player2)
})


player2.button.addEventListener('click', function () {
    updateScore(player2, player1)
})



playtoSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-link', 'has-text-danger')
        p.button.disabled = false;
    }
}


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-link');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}
