const canvas = document.getElementById('canvas');
const resetBtn = document.getElementById('reset');
const slider = document.getElementById('slider');
const sliderLabel = document.getElementById('slider-label');
const optionGrid = document.getElementById('grid-option');
let drawing = false;

slider.min = '10';
slider.max = '100';
let size = 16;
slider.defaultValue = size.toString();
sliderLabel.textContent = slider.defaultValue;

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
    toggleGrid();
}

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

function updateSliderLabel(e) {
    sliderLabel.textContent = `Size: ${this.value}`;
}

function setSize(e) {
    size = this.value;
    resetCanvas();
}

function toggleGrid(e) {
    const children = canvas.children;
    if (this.checked || optionGrid.checked) {
        for (let i=0; i<children.length; i++){
            children.item(i).classList.add('outline');
        }
    } else {
        for (let i=0; i<children.length; i++){
            children.item(i).classList.remove('outline');
        }
    }
}

canvas.addEventListener('mousedown', toggleDrawing);
canvas.addEventListener('mouseup', toggleDrawing);
canvas.addEventListener('mousemove', drawCell);
canvas.addEventListener('click', drawCell);
resetBtn.addEventListener('click', resetCanvas);
slider.addEventListener('input', updateSliderLabel);
slider.addEventListener('change', setSize);
optionGrid.addEventListener('input', toggleGrid)
drawCanvas(size);
