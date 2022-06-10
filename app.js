// Button for Starting Game
const newGame = document.querySelector('.new-game')

// Factory Function for players
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const makeMove = () => {

    }
    return { getName, getSymbol, makeMove }
}


// Module for gameboard
const gameboard = (() => {
    const gameboardArray = ["", "", "", "", "", "", "", "", ""];
    const cells = document.querySelectorAll('.cell');
    const printBoard = () => {
        let i = 0
        cells.forEach(cell => {
            // console.log(cell.id)
            cell.innerText = gameboardArray[i];
            i++;
        })
    }
    printBoard();
    return { printBoard, gameboardArray }
})();



// object for flow of game
const playGame = (() => {
    const p1NameUI = document.querySelector('.player-1-UI');
    const p2NameUI = document.querySelector('.player-2-UI');
    const namePrompt = document.querySelector('.prompt');

    // get player Names & assign symbol
    const getPlayerNames = () => {
        namePrompt.classList.remove('hide')
        const okBtn = document.querySelector('.ok-btn')
        okBtn.addEventListener('click', showNamesUI)
    }
    // display names in UI and create Players with factory function
    const showNamesUI = () => {
        const p1Name = document.querySelector('#p1-name').value;
        const p2Name = document.querySelector('#p2-name').value;
        p1NameUI.innerText = p1Name;
        p2NameUI.innerText = p2Name;
        namePrompt.classList.add('hide');
        createPlayers(p1Name, p2Name);
    }

    // create Player objects
    const createPlayers = (p1Name, p2Name) => {
        // console.log(p1Name)
        const p1 = Player(p1Name, 'X');
        const p2 = Player(p2Name, 'O');
        // console.log(p2.getSymbol())
        indicateCurrentPlayer(p2)
        return p1, p2
    }

    // indicate current player
    const indicateCurrentPlayer = (player) => {
        const currentPlayer = player.getName();
        console.log(currentPlayer);
        const controlsDiv = document.querySelector('.controls');
        const currentPlayerDiv = document.createElement('div');
        currentPlayerDiv.innerText = `${currentPlayer}'s turn`;
        currentPlayerDiv.classList.add('current-player');
        controlsDiv.appendChild(currentPlayerDiv)
    }












    return { getPlayerNames }
})();






// if they have, then continue

// random selection of which player goes first

// player turn


// check for winner




newGame.addEventListener('click', playGame.getPlayerNames)

