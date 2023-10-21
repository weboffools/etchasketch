var cellPerSide = 16;
const container = document.querySelector('.container');
container.setAttribute('style', 'width: 960px; margin: auto; border: 3px solid black');
const containerWidth = Number(container.style.width.slice(0,-2));
const cellWidth = containerWidth / cellPerSide;

function createGrid(cells) {
  for (let i = 0; i < cells; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`row-${i}`);
    rowDiv.setAttribute('style', `display: inline-flex; height: ${cellWidth}px`);
    container.appendChild(rowDiv);

    for (let j = 0; j < cells; j++) {
      let thisRow = document.querySelector(`.row-${i}`);
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('celldiv');
      cellDiv.setAttribute('style', `width: ${cellWidth}px`);
      thisRow.appendChild(cellDiv);
    }
  }
}



