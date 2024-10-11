const gridContainer = document.querySelector('#gridContainer');
const gridSizeButton = document.querySelector('#gridSizeButton');
const colourModeButton = document.querySelector('#colourModeButton');
const colourModeLabel = document.querySelector('#colourModeLabel');
const gridSize = 800; // Size of grid in px (width and height)
let colourMode = 0; // 0 for random RGB colours, 1 for black with progressive opacity

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
            columnDiv.style.opacity = 0;
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
    let randomColour = Math.floor(Math.random()*16777215).toString(16);

    if (target.className === 'square'){
        if (target.style.opacity < 1) (target.style.opacity = parseFloat(target.style.opacity) + 0.1);
        if (colourMode == 0){
            target.style.background = '#' + randomColour;
        }
        else {
            target.style.background = 'black';
        }
    }
})

gridSizeButton.addEventListener('click', () => {
    let numSquares = prompt('Choose a grid size (1-100)');

    if (numSquares > 100) (numSquares = 100);
    removeGrid();
    generateGrid(numSquares);
});

colourModeButton.addEventListener('click', () => {
    if (colourMode == 0) {
        colourMode = 1;
        colourModeLabel.innerText = 'Colour Mode: Black';
    }
    else {
        colourMode = 0;
        colourModeLabel.innerText = 'Colour Mode: RGB'
    }
})

generateGrid(16); // Start with a 16x16 grid