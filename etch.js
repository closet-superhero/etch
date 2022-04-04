const canvas = document.getElementById('canvas');
const resetBtn = document.getElementById('reset');

let size = 30;

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


function handleCanvasClick(e) {
    const target = e.target;
    target.style.backgroundColor = 'blue';
}

function resetCanvas() {
    canvas.textContent = '';
    drawCanvas(size);

}

canvas.addEventListener('click', handleCanvasClick);
resetBtn.addEventListener('click', resetCanvas);

