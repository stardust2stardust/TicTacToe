// Player Object maker (factory function)
const player = (name, symbol, isCurrentPlayer = false) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const getIsCurrentPlayer = () => isCurrentPlayer;
    return { getName, getSymbol, getIsCurrentPlayer }
}


// Module for gameboard
const gameboard = (() => {

    const board = ["", "X", "", "O", "X", "", "", "", ""];
    const cells = document.querySelectorAll('.cell');

    // function showBoard()
    const showBoard = () => {
        let i = 0;
        cells.forEach(cell => {
            cell.innerText = board[i];
            i++;
        });
    }




    // function placeSymbol()

    // checkForWin()

    // clearBoard

    showBoard();



    return { showBoard }

})();


// Module for controller 
const controller = (() => {
    // assign variables to DOM elements
    const newGameBtn = document.querySelector('.new-game')
    const p1NameUI = document.querySelector('.player-1-UI');
    const p2NameUI = document.querySelector('.player-2-UI');
    const namePrompt = document.querySelector('.prompt');


    // newGame()


    // getNames()
    const getNames = () => {
        namePrompt.classList.remove('hide')
        const okBtn = document.querySelector('.ok-btn')
        okBtn.addEventListener('click', createPlayers)

    }

    // createPlayers()
    const createPlayers = () => {
        const p1Name = document.querySelector('#p1-name').value;
        const p2Name = document.querySelector('#p2-name').value;
        const p1 = player(p1Name, 'X', true);
        const p2 = player(p2Name, 'O', false);
        displayNamesUI(p1.getName(), p2.getName())
        const currentPlayer = getCurrentPlayer(p1, p2);
        console.log(currentPlayer)
        activateBoard();

    }

    // displayNamesUI()
    const displayNamesUI = (name1, name2) => {
        p1NameUI.innerText = name1;
        p2NameUI.innerText = name2;
        namePrompt.classList.add('hide');

    }

    // switchPlayers()

    // getCurrentPlayer()
    const getCurrentPlayer = (player1, player2) => {
        let currentPlayer, otherPlayer;
        if (player1.getIsCurrentPlayer() === true) {
            currentPlayer = player1
            otherPlayer = player2
        }
        else {
            currentPlayer = player2
            otherPlayer = player1
        }
        console.log(`Current player is ${currentPlayer.getName()}, and other player is ${otherPlayer.getName()}`)

        showCurrentPlayerUI(currentPlayer)

        return currentPlayer
    }

    // showCurrentPlayerUI()
    const showCurrentPlayerUI = (currentPlayer) => {
        const currentPlayerName = currentPlayer.getName()
        const controlsDiv = document.querySelector('.controls');
        const currentPlayerDiv = document.createElement('div');
        currentPlayerDiv.innerText = `${currentPlayerName}'s turn`;
        currentPlayerDiv.classList.add('current-player');
        controlsDiv.appendChild(currentPlayerDiv)
    }

    const activateBoard = () => {
        const playableArea = document.querySelector('.gameboard');
        playableArea.addEventListener('click', checkCell)

    }

    // function checkCell()
    const checkCell = (e) => {
        // when player clicks on cell, need to check if cell is taken.
        console.log('cell clicked');
        console.log(e.target.id)



        // if not taken, then player's symbol gets placed in cell
    }


    // clearCurrentPlayerUI()

    // Event Listeners
    newGameBtn.addEventListener('click', getNames)

    return { getCurrentPlayer }
})();