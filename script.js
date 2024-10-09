const gridContainer = document.querySelector('#gridContainer');
const gridSizeButton = document.querySelector('#gridSizeButton');
const gridSize = 500;

const calculateSquareSize = (numSquares) => {
    let squareSize = gridSize / numSquares;

    return (squareSize.toString() + 'px');
}

const generateGrid = (numSquares) => {
    let squareSize = calculateSquareSize(numSquares);

    for (let row = 1; row <= numSquares; row++){
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        for (let column = 1; column <= numSquares; column++){
            let columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'square');
            columnDiv.style.width = squareSize;
            columnDiv.style.height = squareSize;
            rowDiv.appendChild(columnDiv);
        }
        rowDiv.style = 'display: flex; background: white;';
        gridContainer.appendChild(rowDiv);
    }
    gridContainer.style = 'width: ' + gridSize + 'px' + '; height: ' + gridSize + 'px';
};

const removeGrid = () => {
    while (gridContainer.lastElementChild){
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
};

gridContainer.addEventListener('mouseover', (event) => { // When hovering over a square in the grid
    let target = event.target;
    if (target.className === 'square') (target.style.background = 'black');
    
})

gridSizeButton.addEventListener('click', () => {
    let numSquares = prompt('Choose a grid size (1-100)');

    if (numSquares > 100) (numSquares = 100);
    removeGrid();
    generateGrid(numSquares);
});

const start = () => {
    generateGrid(16);
};

start();