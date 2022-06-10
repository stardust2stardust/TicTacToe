// Button for Starting Game
const newGame = document.querySelector('.new-game')

// Factory Function for players
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const makeMove = (index) => {
        console.log(index, name)
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

    const markCell = (index, symbol) => {
        gameboardArray[index] = symbol;
        printBoard();
        console.log(gameboardArray)
    }

    return { printBoard, gameboardArray, markCell }
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
        indicateCurrentPlayer(p1)
        return p1, p2
    }

    // indicate current player
    const indicateCurrentPlayer = (player) => {
        const currentPlayer = player;
        console.log(currentPlayer)
        const currentPlayerSymbol = player.getSymbol();
        console.log(currentPlayerSymbol)
        const currentPlayerName = player.getName();
        console.log(currentPlayerName);
        const controlsDiv = document.querySelector('.controls');
        const currentPlayerDiv = document.createElement('div');
        currentPlayerDiv.innerText = `${currentPlayerName}'s turn`;
        currentPlayerDiv.classList.add('current-player');
        controlsDiv.appendChild(currentPlayerDiv)
        listenForMove();

    }

    const listenForMove = () => {
        const playableArea = document.querySelector('.gameboard');
        playableArea.addEventListener('click', checkCell)
    }

    const checkCell = (e) => {

        const playableArea = document.querySelector('.gameboard');
        playableArea.removeEventListener('click', checkCell)

        const clickedCell = e.target;

        if (clickedCell.classList.contains('cell')) {
            const indexInArray = clickedCell.id;
            console.log(indexInArray)
            const symbol = '*'
            if (gameboard.gameboardArray[indexInArray] === '') {
                gameboard.markCell(indexInArray, symbol)
            }


        }

    }











    return { getPlayerNames }
})();






// if they have, then continue

// random selection of which player goes first

// player turn


// check for winner




newGame.addEventListener('click', playGame.getPlayerNames)

