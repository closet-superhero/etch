const canvas = document.getElementById('canvas');
const resetBtn = document.getElementById('reset');
let drawing = false;

let size = 16;

function drawCanvas(size) {
    const width = `${canvas.clientWidth/size}px`;
    const height = `${canvas.clientHeight/size}px`;
    for (let i=0; i<size**2; i++) {
        const node = document.createElement('div');
        node.classList.add('cell');
        node.style.height = height;
        node.style.width = width;
        canvas.appendChild(node);
    }
}
drawCanvas(size);


function toggleDrawing(e) {
    drawing = !drawing;
}

function resetCanvas() {
    canvas.textContent = '';
    drawCanvas(size);

}

function drawCell(e) {
    let target = e.target;
    if (drawing || e.type === 'click') {
        target.style.backgroundColor = 'blue';
    } 
}

canvas.addEventListener('mousedown', toggleDrawing);
canvas.addEventListener('mouseup', toggleDrawing);
canvas.addEventListener('mousemove', drawCell);
canvas.addEventListener('click', drawCell);
resetBtn.addEventListener('click', resetCanvas);

