const gridContainer = document.querySelector('#gridContainer');

for (let row = 1; row <= 16; row++){
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('id', ('row' + row));
    for (let column = 1; column <= 16; column++){
        let columnDiv = document.createElement('div');
        columnDiv.setAttribute('id', ('row' + row + 'column' + column));
        columnDiv.style.width = '50px';
        columnDiv.style.height = '50px';
        rowDiv.appendChild(columnDiv);
    }
    rowDiv.style = 'display: flex; background: white; width: 800px';
    gridContainer.appendChild(rowDiv);
}

gridContainer.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.style.background = "black";
})