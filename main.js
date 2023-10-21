var cellPerSide = 100;
const container = document.querySelector('.container');
container.setAttribute('style', 'display: flex; flex-direction: column; gap: 0px; width: 960px; margin: auto; border: 3px solid black');
const containerWidth = Number(container.style.width.slice(0,-2));
const cellWidth = containerWidth / cellPerSide;

function createGrid(cells) {
  container.replaceChildren();
  for (let i = 0; i < cells; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`row-${i}`);
    rowDiv.setAttribute('style', `display: inline-flex; height: ${cellWidth}px; margin: 0;`);
    container.appendChild(rowDiv);

    for (let j = 0; j < cells; j++) {
      let thisRow = document.querySelector(`.row-${i}`);
      const btn = document.createElement('button');
      btn.classList.add('cellbtn');
      btn.setAttribute('style', `width: ${cellWidth}px; button-style: none; border: none; margin: 0; background-color: white;`);
      thisRow.appendChild(btn);
    }
  }
  eventHandler();
}

function eventHandler() {
  const buttons = document.querySelectorAll('.cellbtn')

    buttons.forEach((button) => {
      button.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
      });
    });
}

