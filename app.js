// Button for Starting Game

// Module for gameboard
const gameboard = (() => {
    const gameboardArray = ["X", "O", "X", "~", "X", "O", "~", "~", "O"];
    const cells = document.querySelectorAll('.cell')
    const printBoard = () => {
        let i = 0
        cells.forEach(cell => {
            console.log(cell.id)
            cell.innerText = gameboardArray[i];
            i++;
        })
    }
    return { printBoard }
})();


gameboard.printBoard()


// Factory Function for players
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol
}


// object for flow of game
const playGame = (() => {
    // check to see if players have been assigned symbols
    // if not, assign Player 1 and Player 2 to X/O
    // if they have, then continue



})