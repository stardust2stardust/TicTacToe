// Button for Starting Game
const newGame = document.querySelector('.new-game')

// Module for gameboard
const gameboard = (() => {
    const gameboardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const cells = document.querySelectorAll('.cell')
    const printBoard = () => {
        let i = 0
        cells.forEach(cell => {
            // console.log(cell.id)
            cell.innerText = gameboardArray[i];
            i++;
        })
    }
    return { printBoard, gameboardArray }
})();


gameboard.printBoard()


// Factory Function for players
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const selectCell = () => {

    }
    return { getName, getSymbol, selectCell }
}


// object for flow of game
const playGame = (() => {
    
    // get player Names & assign symbol
    const getPlayerNames = () => {
        const p1NameUI = document.querySelector('.player-1-UI')
        const p2NameUI = document.querySelector('.player-2-UI')
        const namePrompt = document.querySelector('.prompt')
        namePrompt.classList.remove('hide')
        const okBtn = document.querySelector('.ok-btn')
        okBtn.addEventListener('click', () => {
            const p1Name = document.querySelector('#p1-name').value;
            const p2Name = document.querySelector('#p2-name').value;
            p1NameUI.innerText = p1Name;
            p2NameUI.innerText = p2Name;
            namePrompt.classList.add('hide')
                       
        })
        

    }
    return { getPlayerNames}
    })();
    // if they have, then continue

    // random selection of which player goes first

    // player turn


    // check for winner




newGame.addEventListener('click', playGame.getPlayerNames)

// if (p1Display.innerText === 'Player 1') {
//     const p1NamePrompt = document.querySelector('.player1-name');
//     p1NamePrompt.classList.remove('hide');
//     const p1OkBtn = document.querySelector('#p1-ok');
//     getPlayerNames(p10Btn, "1" )
// const getPlayerNames = (okButton, playerNumber) => {
    

//         okButton.addEventListener('click', () => {
//             const p1Name = document.querySelector(`#p${playerNumber}-name`).value;
//             p1Display.innerText = p1Name;
//             p1NamePrompt.classList.add('hide');
//             const p1Symbol = 'X'
//             const p1 = Player(p1Name, p1Symbol)
//         });
//     }
//     if (p2Display.innerText === 'Player 2') {
//         const p2NamePrompt = document.querySelector('.player2-name');
//         p2NamePrompt.classList.remove('hide');
//         const p2OkBtn = document.querySelector('#p2-ok');

//         p2OkBtn.addEventListener('click', () => {
//             const p2Name = document.querySelector('#p2-name').value;
//             p2Display.innerText = p2Name;
//             p2NamePrompt.classList.add('hide');
//             const p2Symbol = 'O';
//             const p2 = Player(p2Name, p2Symbol)
//             console.log(p2.getName)
//         });
//     }
//     return { getPlayerNames }