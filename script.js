const gridContainer = document.querySelector('#gridContainer');
const gridSizeButton = document.querySelector('#gridSizeButton');

const calculateSquareSize = (numRows, numColumns) => {
    const gridSize = 960; //960px x 960px
    let squareWidth = 960 / numRows;
    let squareHeight = 960 / numColumns;

    return [squareWidth.toString() + 'px', squareHeight.toString() + 'px'];
}

const generateGrid = (numRows, numColumns) => {
    let squareDimensions = calculateSquareSize(numRows, numColumns);
    let squareWidth = squareDimensions[0];
    let squareHeight = squareDimensions[1];

    for (let row = 1; row <= numRows; row++){
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        for (let column = 1; column <= numColumns; column++){
            let columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'square');
            columnDiv.style.width = squareWidth;
            columnDiv.style.height = squareHeight;
            rowDiv.appendChild(columnDiv);
        }
        rowDiv.style = 'display: flex; background: white;';
        gridContainer.appendChild(rowDiv);
    }
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
    let numRows = prompt('How many rows? (max 100)');
    let numColumns = prompt('How many columns? (max 100');

    if (numRows > 100) (numRows = 100);
    if (numColumns > 100) (numColumns = 100);
    removeGrid();
    generateGrid(numRows, numColumns);
});

const start = () => {
    generateGrid(16, 16);
};

start();