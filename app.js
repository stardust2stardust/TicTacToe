// Button for Starting Game
const newGame = document.querySelector('.new-game')

// Factory Function for players
const Player = (name, symbol, isTurn) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const getIsTurn = () => isTurn;
    const makeMove = (index) => {
        console.log(index, name)
    }
    return { getName, getSymbol, getIsTurn, makeMove }
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

    const checkCell = (e, p1, p2) => {
        const playableArea = document.querySelector('.gameboard');
        playableArea.removeEventListener('click', checkCell)

        const clickedCell = e.target;
        let player;
        if (p1.getIsTurn() === true) {
            player = p1;

        } else {
            player = p2
        }

        if (clickedCell.classList.contains('cell')) {
            const indexInArray = clickedCell.id;
            console.log(indexInArray)
            const symbol = player.getSymbol()
            if (gameboard.gameboardArray[indexInArray] === '') {
                gameboard.markCell(indexInArray, symbol)
            }


        }
    }

    const markCell = (index, symbol) => {
        gameboardArray[index] = symbol;
        printBoard();
        console.log(gameboardArray)
    }

    return { printBoard, gameboardArray, markCell, checkCell }
})();



// object for flow of game
const playGame = (() => {
    const p1NameUI = document.querySelector('.player-1-UI');
    const p2NameUI = document.querySelector('.player-2-UI');
    const namePrompt = document.querySelector('.prompt');
    const playableArea = document.querySelector('.gameboard');

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

        const p1 = Player(p1Name, 'X', true);
        const p2 = Player(p2Name, 'O', false);
        let player = displayCurrentPlayer(p2, p1);

    }

    // indicate current player
    const displayCurrentPlayer = (currentPlayer, otherPlayer) => {
        let player, other
        if (currentPlayer.getIsTurn()) {
            player = currentPlayer;
            other = otherPlayer;
        }
        else {
            player = otherPlayer;
            other = currentPlayer;
        }
        console.log(`Current player is ${player.getName()}, and other player is ${other.getName()}`)

        const currentPlayerSymbol = player.getSymbol();
        console.log(currentPlayerSymbol)
        const currentPlayerName = player.getName();
        console.log(currentPlayerName);
        const controlsDiv = document.querySelector('.controls');
        const currentPlayerDiv = document.createElement('div');
        currentPlayerDiv.innerText = `${currentPlayerName}'s turn`;
        currentPlayerDiv.classList.add('current-player');
        controlsDiv.appendChild(currentPlayerDiv)

    }

    playableArea.addEventListener('click', gameboard.checkCell)


    return { getPlayerNames }
})();





newGame.addEventListener('click', playGame.getPlayerNames)

