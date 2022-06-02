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


// gameboard.printBoard()


// Factory Function for players
const Player = (name) => {
    const getName = () => name;
}


// object for flow of game