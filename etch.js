const canvas = document.getElementById('canvas');
const resetBtn = document.getElementById('reset');
const slider = document.getElementById('slider');
const sliderLabel = document.getElementById('slider-label');
const optionGrid = document.getElementById('grid-option');
let drawing = false;
let drawColor = 'blue';
const drawColorPicker = document.getElementById('draw-color');
const bgColorPicker = document.getElementById('bg-color');

slider.min = '10';
slider.max = '100';
let canvasSize = 16;
slider.defaultValue = canvasSize.toString();
sliderLabel.textContent = `Size: ${slider.defaultValue}`;

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
    e.preventDefault(); // stop drag behavior
    if ((this == canvas) && (e.type == 'mousedown')) {
        drawing = true;
    } else if (e.type == 'mouseup') {
        drawing = false;
    }
}

function resetCanvas() {
    canvas.replaceChildren();
    drawCanvas(canvasSize);

}

function drawCell(e) {
    let target = e.target;
    if (target.id === 'canvas'){
        return;
    } else if (drawing || e.type === 'click') {
        target.style.backgroundColor = drawColor;
    } 
}

function updateSliderLabel(e) {
    sliderLabel.textContent = `Size: ${this.value}`;
}

function setSize(e) {
    canvasSize = this.value;
    resetCanvas();
}

function toggleGrid(e) {
    const children = canvas.children;
    if (optionGrid.checked) {
        for (let i=0; i<children.length; i++){
            children.item(i).classList.add('outline');
        }
    } else {
        for (let i=0; i<children.length; i++){
            children.item(i).classList.remove('outline');
        }
    }
}

function changeColor(e){
    switch(this.id){
        case 'bg-color': 
            canvas.style.backgroundColor = this.value;
            break;
        case 'draw-color':
            drawColor = this.value;
            break;
    }
}

canvas.addEventListener('mousedown', toggleDrawing);
document.addEventListener('mouseup', toggleDrawing);
canvas.addEventListener('mousemove', drawCell);
canvas.addEventListener('click', drawCell);
resetBtn.addEventListener('click', resetCanvas);
slider.addEventListener('input', updateSliderLabel);
slider.addEventListener('change', setSize);
optionGrid.addEventListener('input', toggleGrid);
drawColorPicker.addEventListener('change', changeColor);
bgColorPicker.addEventListener('change', changeColor);
drawCanvas(canvasSize);
