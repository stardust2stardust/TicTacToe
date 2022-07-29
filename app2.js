// Player Object maker (factory function)
const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;

    return { getName, getSymbol }
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

    showBoard();

    return { showBoard, board }
})();


// Module for controller 
const controller = (() => {
    // assign variables to DOM elements
    const newGameBtn = document.querySelector('.new-game')
    const p1NameUI = document.querySelector('.player-1-UI');
    const p2NameUI = document.querySelector('.player-2-UI');
    const namePrompt = document.querySelector('.prompt');
    const playableArea = document.querySelector('.gameboard');
    let p1, p2

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
        p1 = player(p1Name, 'X');
        p2 = player(p2Name, 'O');

        const currentPlayer = p1
        const otherPlayer = p2
        const currentPlayerName = currentPlayer.getName()
        displayNamesUI(p1.getName(), p2.getName())
        showCurrentPlayerUI(currentPlayerName)

        activateBoard(currentPlayer, otherPlayer);

        return { p1, p2 }
    }

    // displayNamesUI()
    const displayNamesUI = (name1, name2) => {
        p1NameUI.innerText = name1;
        p2NameUI.innerText = name2;
        namePrompt.classList.add('hide');
    }


    // showCurrentPlayerUI()
    const showCurrentPlayerUI = (currentPlayer) => {
        const controlsDiv = document.querySelector('.controls');
        const currentPlayerDiv = document.createElement('div');
        currentPlayerDiv.innerText = `${currentPlayer}'s turn`;
        currentPlayerDiv.classList.add('current-player');
        controlsDiv.appendChild(currentPlayerDiv)
    }

    // acitivate board and listen for click
    const activateBoard = (currentPlayer, otherPlayer) => {
        const curerentPlayerName = currentPlayer.getName()
        const currentPlayerSymbol = currentPlayer.getSymbol()
        const otherPlayerName = otherPlayer.getName()
        const otherPlayerSymbol = otherPlayer.getSymbol()
        playableArea.addEventListener('click', (e) => {
            const cellNumber = e.target.id
            checkCell(cellNumber, curerentPlayerName, currentPlayerSymbol)
        })

    }

    // check clicked cell
    const checkCell = (cell, name, symbol) => {
        // when player clicks on cell, need to check if cell is taken.
        console.log('cell clicked');
        console.log(cell, symbol)

        if (gameboard.board[cell] === '') {
            gameboard.board[cell] = symbol
            switchPlayers(name, symbol)
        } else {
            console.log('that spot is occupied')
        }
        gameboard.showBoard()
    }

    const switchPlayers = (name, symbol) => {
        if (symbol === 'X') {
            symbol = 'O'
        } else if (symbol === 'O') {
            symbol = 'X'
        }

        console.log(p1.getSymbol())
        showCurrentPlayerUI(name)
    }



    // clearCurrentPlayerUI()

    // Event Listeners
    newGameBtn.addEventListener('click', getNames)

    return { createPlayers }
})();