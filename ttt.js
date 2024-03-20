var currentPlayer = 'X'; // Starting with player X

function move(button) {
    if (button.innerHTML === '') {
        button.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
    } 
}

