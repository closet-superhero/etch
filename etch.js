const canvas = document.getElementById('canvas');

let size = 10;
const width = `${canvas.clientWidth/size}px`;
const height = `${canvas.clientHeight/size}px`;

function drawCanvas(size) {
    for (let i=0; i<size**2; i++) {
        const node = document.createElement('div');
        node.classList.add('cell');
        node.style.height = height;
        node.style.width = width;
        canvas.appendChild(node);
    }
}
drawCanvas(size);


function handleClick(e) {
    const cell = e.target;
    cell.style.backgroundColor = 'blue';
}

canvas.addEventListener('click', handleClick);
