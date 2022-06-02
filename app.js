const gameboard = (() => {
    const gameboardArray = [0, 0, 0, 0, 0, 0, 0, 0];
    const printBoard = () => {
        for (let space of gameboardArray) {
            console.log(space)
        }

    }
    return { printBoard }
})();


gameboard.printBoard()
