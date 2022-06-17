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

    //////////////// initializing p1 and p2 here allows access in rest of module ///////
    let p1, p2

    // get player names
    const getNames = () => {
        namePrompt.classList.remove('hide')
        const okBtn = document.querySelector('.ok-btn')
        okBtn.addEventListener('click', () => {
            const p1Name = document.querySelector('#p1-name').value;
            const p2Name = document.querySelector('#p2-name').value;
            p1 = player(p1Name, 'X');
            p2 = player(p2Name, 'O');
            testFunction();
        })

        const testFunction = () => {
            console.log(p1.getName())
            testFunction2();
        }

        const testFunction2 = () => {
            console.log(p2.getSymbol())
        }
    }

    // Event Listeners
    newGameBtn.addEventListener('click', getNames)

})()