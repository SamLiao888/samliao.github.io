const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(e) {
isDrawing = true;
[lastX, lastY] = [e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop];
}

function draw(e) {
if (!isDrawing) return;
e.preventDefault(); // 防止滾動
ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
ctx.stroke();
[lastX, lastY] = [e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop];
}

function stopDrawing() {
isDrawing = false;
}

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

// 也保留滑鼠事件，以便在支持滑鼠的設備上使用
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

document.getElementById('save').addEventListener('click', function() {
const dataURL = canvas.toDataURL('image/png');
console.log(dataURL); // 在這裡可以將dataURL發送到服務器或進行其他處理
});

document.getElementById('clear').addEventListener('click', function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});
