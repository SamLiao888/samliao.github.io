let currentCell;

function openSignaturePad(row, col) {
  currentCell = document.querySelector(`#myTable tr:nth-child(${row}) td:nth-child(${col})`);
  document.getElementById('signatureModal').style.display = 'block';
  signaturePad.clear();
}

function confirmSignature() {
  const signatureData = signaturePad.toDataURL();
  // currentCell.innerHTML = `<img src="${signatureData}" style="max-width: 100px; max-height: 100px;">`;
  currentCell.innerHTML = `<img src="${signatureData}" style="max-width: 80px; max-height: 50px;">`;
  document.getElementById('signatureModal').style.display = 'none';
}

const canvas = document.getElementById('signatureCanvas');
const signaturePad = new SignaturePad(canvas);

// const canvas = document.getElementById('signature-pad');
// const ctx = canvas.getContext('2d');
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// function startDrawing(e) {
// isDrawing = true;
// [lastX, lastY] = [e.offsetX, e.offsetY];
// }

// function draw(e) {
// if (!isDrawing) return;
// e.preventDefault(); // 防止滾動
// ctx.beginPath();
// ctx.moveTo(lastX, lastY);
// ctx.lineTo(e.offsetX, e.offsetY);
// ctx.stroke();
// [lastX, lastY] = [e.offsetX, e.offsetY];
// }

// function stopDrawing() {
// isDrawing = false;
// }

// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stopDrawing);
// canvas.addEventListener('mouseout', stopDrawing);

// document.getElementById('save').addEventListener('click', function() {
// const dataURL = canvas.toDataURL('image/png');
// console.log(dataURL); // 在這裡可以將dataURL發送到服務器或進行其他處理
// });

// document.getElementById('clear').addEventListener('click', function() {
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// });